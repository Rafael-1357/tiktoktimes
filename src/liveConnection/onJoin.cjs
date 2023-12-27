function onJoin({ uniqueId, profilePictureUrl }) {
    const notificationData = { origin: 'chat', uniqueId, profilePictureUrl }
    global.socket.emit('notification', notificationData)
}

module.exports = onJoin;