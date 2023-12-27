const searchParticipantInAllGroups = require('../utils/searchParticipantInAllGroups.cjs');
const emitGlobalData = require('../utils/emitGlobalData.cjs');

function onFollow({ uniqueId }) {
    const { group } = searchParticipantInAllGroups(uniqueId);
    group.addPoints(uniqueId, 5e3);
    emitGlobalData();
}

module.exports = onFollow;
