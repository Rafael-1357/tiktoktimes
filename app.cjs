const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:5173'}})

io.on('connection', function(socket){
    console.log('Usuário conectado')

    socket.on('disconnect', function(){
		console.log('Usuário desconectou')
    })
	
	const { WebcastPushConnection } = require('tiktok-live-connector');

	// Username of someone who is currently live
	let tiktokUsername = 'oferal';
	
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
	tiktokLiveConnection.on('chat', data => {
		let picture = (`${data.profilePictureUrl}`);
		socket.emit('enviandoParaCliente', picture)
	})

	// And here we receive gifts sent to the streamer
	tiktokLiveConnection.on('gift', data => {
		console.log(`${data.uniqueId} (userId:${data.userId}) sends ${data.giftId}`);
	})
})

server.listen(3001, () => console.log('server rodando'))

