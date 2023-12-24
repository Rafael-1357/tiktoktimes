const findGroup = require('../utils/findGroup.cjs');

function onChat({ comment, uniqueId, profilePictureUrl }) {
    console.log(comment);
    const group = findGroup(comment.toLowerCase());
    if (group) {
        console.log(group);
        const newParticipant = group.addParticipant(uniqueId, profilePictureUrl);
        global.socket.emit('add', {
            userInfos: newParticipant,
        });
    }
}

module.exports = onChat;
