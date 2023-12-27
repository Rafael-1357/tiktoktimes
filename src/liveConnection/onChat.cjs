const findGroup = require('../utils/findGroup.cjs');

function onChat({ comment, uniqueId, profilePictureUrl }) {
    const group = findGroup(comment.toLowerCase());
    if (group) {
        const newParticipant = group.addParticipant(uniqueId, profilePictureUrl);
        global.socket.emit('add', {
            userInfos: newParticipant,
        });
    }
}

module.exports = onChat;
