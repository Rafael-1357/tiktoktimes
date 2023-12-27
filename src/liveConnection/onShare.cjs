const searchParticipantInAllGroups = require('../utils/searchParticipantInAllGroups.cjs');
const emitGlobalData = require('../utils/emitGlobalData.cjs');

function onShare({ uniqueId }) {
    const { group } = searchParticipantInAllGroups(uniqueId);
    if (!group) return;

    group.addPoints(uniqueId, 5e3);
    emitGlobalData();
}

module.exports = onShare;
