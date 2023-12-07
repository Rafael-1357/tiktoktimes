const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:5173' } })

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

io.on('connection', function (socket) {
	console.log('Usuário conectado')

	socket.on('disconnect', function () {
		console.log('Usuário desconectou')
	})

	const { WebcastPushConnection } = require('tiktok-live-connector');

	// Username of someone who is currently live
	let tiktokUsername = 'caverinhajplay';

	// Create a new wrapper object and pass the username
	let tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

	// Connect to the chat (await can be used as well)
	tiktokLiveConnection.connect().then(state => {
		console.info(`Connected to roomId ${state.roomId}`);
	}).catch(err => {
		console.error('Failed to connect', err);
	})

	// Define the events that you want to handle
	// In this case we listen to chat messages (comments)
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
            console.log(uniqueId);
			const timeComentado = times.find((time) => time.nome === timesAliasMap[comment]);
            for (const torcedor of timeComentado.torcedores) if (torcedor.uniqueId === uniqueId) return true;
            return false;
		};

		const comentario = comment.toLowerCase();
		if (Object.keys(timesAliasMap).includes(comentario) && !torcedorEstaCadastrado()) {
			const indiceTimeComentado = times.findIndex((time) => time.nome === timesAliasMap[comentario]);
			times[indiceTimeComentado].torcedores.push({
				uniqueId,
				imagemTorcedorUrl: profilePictureUrl,
				pontos: 0,
				posicao: times[indiceTimeComentado].torcedores.length,
			});
			socket.emit('enviandoParaCliente', times);
		};
	})

	// And here we receive gifts sent to the streamer
	tiktokLiveConnection.on('gift', data => {
		console.log(`${data.uniqueId} (userId:${data.userId}) sends ${data.giftId}`);
	})
})

server.listen(3001, () => console.log('server rodando'))

