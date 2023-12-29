const emitAction = require('../utils/emitAction.cjs');

function onJoin({ uniqueId, profilePictureUrl }) {
    emitAction({ uniqueId, styles: { participantImage: profilePictureUrl } }, 'join');
}

module.exports = onJoin;
