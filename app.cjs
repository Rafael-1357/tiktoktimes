const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:5173' } })
const { WebcastPushConnection } = require('tiktok-live-connector');

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
	atualizarPontosTime(indiceTimeDoTorcedor);
};

const cadastrarTorcedor = (nomeTime, uniqueId, fotoUrl) => {
	const indiceTimeComentado = times.findIndex((time) => time.nome === nomeTime);
	times[indiceTimeComentado].torcedores.push({
		uniqueId, pontos: 0, imagemTorcedorUrl: fotoUrl, posicao: times[indiceTimeComentado].torcedores.length + 1,
	});
};

io.on('connection', function (socket) {
	console.log('Usuário conectado');
	socket.on('disconnect', () => console.log('Usuário desconectou'));

	let tiktokUsername = 'guilhermewilgner';
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

		const torcedorEstaCadastrado = () => {
			const timeComentado = times.find((time) => time.nome === timesAliasMap[comment]);
			for (const torcedor of timeComentado.torcedores) if (torcedor.uniqueId === uniqueId) return true;
			return false;
		};

		const comentario = comment.toLowerCase();

		if (Object.keys(timesAliasMap).includes(comentario) && !torcedorEstaCadastrado()) {
			cadastrarTorcedor(timesAliasMap[comentario], uniqueId, profilePictureUrl);
			socket.emit('enviandoParaCliente', times);
		} else if (Object.keys(timesAliasMap).includes(comentario)) {
			incrementarPontosTorcedor(timesAliasMap[comentario], uniqueId, 200);
			socket.emit('enviandoParaCliente', times);
		};
	});

	// And here we receive gifts sent to the streamer
	tiktokLiveConnection.on('gift', ({ uniqueId, giftId }) => {
		let giftIdInt = parseInt(giftId)
		if (giftIdInt === 5655) {
			incrementarPontosTorcedor(pesquisarTimeTorcedor(uniqueId), uniqueId, 100)
			socket.emit('gift', times)
		}
		if (giftIdInt === 5658) {
			incrementarPontosTorcedor(pesquisarTimeTorcedor(uniqueId), uniqueId, 3000) 
			socket.emit('gift', times )
		}
		if (giftIdInt === 5886) {
			incrementarPontosTorcedor(pesquisarTimeTorcedor(uniqueId), uniqueId, 100000) 
			socket.emit('gift', times )
		}

	})

	tiktokLiveConnection.on('like', ({ uniqueId, likeCount }) => {
		let likeCountInt = parseInt(likeCount)
		if (likeCountInt >= 30) {
			incrementarPontosTorcedor(pesquisarTimeTorcedor(uniqueId), uniqueId, 100) 
			socket.emit('like', times)
		}
	})

	tiktokLiveConnection.on('follow', ({ uniqueId }) => {
		incrementarPontosTorcedor(pesquisarTimeTorcedor(uniqueId), uniqueId, 10000)
	})

	tiktokLiveConnection.on('share', ({ uniqueId }) => {
		incrementarPontosTorcedor(pesquisarTimeTorcedor(uniqueId), uniqueId, 5000)
	})
})

server.listen(3001, () => console.log('server rodando'));
