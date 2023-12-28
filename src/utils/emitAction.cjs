function emitAction(participant, actionType) {
    console.log(participant);
    global.socket.emit('newAction', { participantInfos: participant, actionType });
}

module.exports = emitAction;
