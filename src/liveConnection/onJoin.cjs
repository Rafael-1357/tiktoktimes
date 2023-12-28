const emitAction = require('../utils/emitAction.cjs');

function onJoin({ uniqueId, profilePictureUrl }) {
    console.log(uniqueId);
    emitAction({ uniqueId, styles: { participantImage: profilePictureUrl } }, 'join');
}

module.exports = onJoin;
