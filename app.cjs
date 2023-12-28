const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:5173' } });
const { WebcastPushConnection } = require('tiktok-live-connector');

const onChat = require('./src/liveConnection/onChat.cjs');
const onFollow = require('./src/liveConnection/onFollow.cjs');
const onGift = require('./src/liveConnection/onGift.cjs');
const onLike = require('./src/liveConnection/onLike.cjs');
const onShare = require('./src/liveConnection/onShare.cjs');
const onLiveIntro = require('./src/liveConnection/onLiveIntro.cjs');

require('./groupsConfig.cjs');

io.on('connection', function (socket) {
	global.socket = socket;
	console.log('📶 Usuário Conectado');
	socket.on('disconnect', () => console.log('🔌 Usuário Desconectou'));

	let tiktokUsername = process.argv[2];
	let tiktokLiveConnection = new WebcastPushConnection(tiktokUsername, {
		processInitialData: false
	});

	tiktokLiveConnection
		.connect()
		.then(state => console.info(`Connected to roomId ${state.roomId}`))
		.catch(err => console.error('Failed to connect', err));

	socket.emit('initialData', global.data);

	tiktokLiveConnection.on('chat', onChat);
	tiktokLiveConnection.on('gift', onGift);
	tiktokLiveConnection.on('like', onLike);
	tiktokLiveConnection.on('follow', onFollow);
	tiktokLiveConnection.on('share', onShare);
	tiktokLiveConnection.on('liveIntro', onLiveIntro);
});

server.listen(3001, () => console.log('📡 Server Rodando'));

