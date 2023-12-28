const findGroup = require('../utils/findGroup.cjs');
const emitAction = require('../utils/emitAction.cjs');

function onChat({ comment, uniqueId, profilePictureUrl }) {
    const group = findGroup(comment.toLowerCase());
    if (group) {
        group.addParticipant(uniqueId, profilePictureUrl);
        global.socket.emit('resetGroups', global.data);
    }
}

module.exports = onChat;
