function onLiveIntro({ uniqueId, profilePictureUrl }) {
    console.log(uniqueId);
    global.socket.emit('newAction', { uniqueId, styles: { participantImage: profilePictureUrl } });
}

module.exports = onLiveIntro;
