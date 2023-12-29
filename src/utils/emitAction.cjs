function emitAction(participant, actionType) {
    global.socket.emit('newAction', { participantInfos: participant, actionType });
}

module.exports = emitAction;
