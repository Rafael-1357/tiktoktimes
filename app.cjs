const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:5173' } })
const { WebcastPushConnection } = require('tiktok-live-connector');
let socketInstance;

const times = [
	{
		nome: 'Flamengo',
		totalPontos: 0,
		imagemTimeUrl: 'flamengo.jpg',
		torcedores: [],
		posicao: 1,
	},
	{
		nome: 'Fluminense',
		totalPontos: 0,
		imagemTimeUrl: 'fluminense.jpg',
		torcedores: [],
		posicao: 2,
	},
	{
		nome: 'Palmeiras',
		totalPontos: 0,
		imagemTimeUrl: 'palmeiras.jpg',
		torcedores: [],
		posicao: 3,
	},
	{
		nome: 'São Paulo',
		totalPontos: 0,
		imagemTimeUrl: 'saopaulo.jpg',
		torcedores: [],
		posicao: 4,
	},
	{
		nome: 'Botafogo',
		totalPontos: 0,
		imagemTimeUrl: 'botafogo.png',
		torcedores: [],
		posicao: 5,
	},
	{
		nome: 'Internacional',
		totalPontos: 0,
		imagemTimeUrl: 'internacional.png',
		torcedores: [],
		posicao: 6,
	},
	{
		nome: 'Vasco',
		totalPontos: 0,
		imagemTimeUrl: 'vasco.png',
		torcedores: [],
		posicao: 7,
	},
	{
		nome: 'Santos',
		totalPontos: 0,
		imagemTimeUrl: 'santos.png',
		torcedores: [],
		posicao: 8,
	},
	{
		nome: 'Corinthians',
		totalPontos: 0,
		imagemTimeUrl: 'corinthians.png',
		torcedores: [],
		posicao: 9,
	},
];

let timeAscendente = '';

const likesUsuarios = [

];

const pesquisarTimeTorcedor = (uniqueId) => times.find(({ torcedores }) => torcedores.some(torcedor => torcedor.uniqueId === uniqueId))?.nome;

const emitir = () => {
	socketInstance.emit('enviandoParaCliente', { times, timeAscendente });
}

const ordenarTimes = () => {
	const subListaOrdenada = times.map(({ nome, totalPontos }) => ({ nome, totalPontos })).sort((timeA, timeB) => timeB.totalPontos - timeA.totalPontos);
	subListaOrdenada.forEach(({ nome }, index) => {
		const indiceTime = times.findIndex(({ nome: nomeTime }) => nomeTime === nome);
		times[indiceTime].posicao = index + 1;
	});
};

const ordenarTorcedores = (indiceTime) => {
	const listaTorcedores = times[indiceTime].torcedores;
	const subListaOrdenada = listaTorcedores.map(({ uniqueId, pontos }) => ({ uniqueId, pontos })).sort((torcedorA, torcedorB) => torcedorB.pontos - torcedorA.pontos);
	subListaOrdenada.forEach(({ uniqueId }, index) => {
		const indiceTorcedor = listaTorcedores.findIndex(({ uniqueId: torcedorID }) => torcedorID === uniqueId);
		times[indiceTime].torcedores[indiceTorcedor].posicao = index + 1;
	});
};

const atualizarPontosTime = (indiceTime) => {
    times[indiceTime].totalPontos = times[indiceTime].torcedores.reduce((totalPontos, { pontos }) => totalPontos + pontos, 0);
    ordenarTimes();
};

const incrementarPontosTorcedor = (nomeTime, uniqueId, quantidadePontos) => {
    const indiceTimeDoTorcedor = times.findIndex(time => time.nome === nomeTime);
    const indiceTorcedor = times[indiceTimeDoTorcedor].torcedores.findIndex(torcedor => torcedor.uniqueId === uniqueId);
    times[indiceTimeDoTorcedor].torcedores[indiceTorcedor].pontos += quantidadePontos;
    ordenarTorcedores(indiceTimeDoTorcedor);
	const timesCopiaAntiga = JSON.parse(JSON.stringify(times));
    atualizarPontosTime(indiceTimeDoTorcedor);
	timeAscendente = times.find(({ posicao }, index) => posicao < timesCopiaAntiga[index].posicao)?.nome;
	emitir();
};

const cadastrarTorcedor = (nomeTime, uniqueId, fotoUrl) => {
	const indiceTimeComentado = times.findIndex((time) => time.nome === nomeTime);
	times[indiceTimeComentado].torcedores.push({
		uniqueId, pontos: 0, imagemTorcedorUrl: fotoUrl, posicao: times[indiceTimeComentado].torcedores.length + 1,
	});
	likesUsuarios.push({
		uniqueId,
		pontosAtuais: 0,
	});
	emitir()
};

io.on('connection', function (socket) {
	socketInstance = socket;
	console.log('Usuário conectado');
	socket.on('disconnect', () => console.log('Usuário desconectou'));

	let tiktokUsername = 'cozinhandocomakepa';
	let tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

	tiktokLiveConnection.connect()
		.then(state => console.info(`Connected to roomId ${state.roomId}`))
		.catch(err => console.error('Failed to connect', err));

	tiktokLiveConnection.on('chat', ({ uniqueId, comment, profilePictureUrl }) => {
		const timesAliasMap = {
			'flamengo': 'Flamengo',
			'fluminense': 'Fluminense',
			'palmeiras': 'Palmeiras',
			'sao paulo': 'São Paulo',
			'são paulo': 'São Paulo',
			'botafogo': 'Botafogo',
			'internacional': 'Internacional',
			'vasco': 'Vasco',
			'santos': 'Santos',
			'corinthians': 'Corinthians',
		};

		const comentario = comment.toLowerCase();

		const torcedorEstaCadastrado = () => {
			const timeComentado = times.find((time) => time.nome === timesAliasMap[comentario]);
			for (const torcedor of timeComentado.torcedores) if (torcedor.uniqueId === uniqueId) return true;
			return false;
		};


		if (Object.keys(timesAliasMap).includes(comentario) && !torcedorEstaCadastrado()) {
			cadastrarTorcedor(timesAliasMap[comentario], uniqueId, profilePictureUrl);
			emitir();
		}
	});

	// And here we receive gifts sent to the streamer
	tiktokLiveConnection.on('gift', ({ uniqueId, giftId }) => {
		let giftIdInt = parseInt(giftId)
		if (giftIdInt === 5655) { incrementarPontosTorcedor(pesquisarTimeTorcedor(uniqueId), uniqueId, 100) }
		if (giftIdInt === 5658) { incrementarPontosTorcedor(pesquisarTimeTorcedor(uniqueId), uniqueId, 3000) }
		if (giftIdInt === 5886) { incrementarPontosTorcedor(pesquisarTimeTorcedor(uniqueId), uniqueId, 100000) }
	})

	tiktokLiveConnection.on('like', ({ uniqueId, likeCount, ...data }) => {
		let likeCountInt = parseInt(likeCount);
		const userIndex = likesUsuarios.findIndex(user => user.uniqueId === uniqueId);
		if (userIndex >= 0) likesUsuarios[userIndex].pontosAtuais += likeCount;
		if (likesUsuarios[userIndex]?.pontosAtuais >= 30) {
			console.log('Chegou!', uniqueId);
			incrementarPontosTorcedor(pesquisarTimeTorcedor(uniqueId), uniqueId, 100)
			likesUsuarios[userIndex].pontosAtuais = 0;
		}
	})

	tiktokLiveConnection.on('follow', ({ uniqueId }) => { incrementarPontosTorcedor(pesquisarTimeTorcedor(uniqueId), uniqueId, 10000) })

	tiktokLiveConnection.on('share', ({ uniqueId }) => { incrementarPontosTorcedor(pesquisarTimeTorcedor(uniqueId), uniqueId, 5000) })
})

server.listen(3001, () => console.log('server rodando'));
