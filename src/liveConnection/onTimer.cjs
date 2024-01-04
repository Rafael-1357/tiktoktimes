function onTimer() {
    global.socket.emit('onWinModel', global.data);
}

module.exports = onTimer;

