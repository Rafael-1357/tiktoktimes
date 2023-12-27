function emitGlobalData() {
    global.socket.emit('updateGroups', global.data);
}

module.exports = emitGlobalData;