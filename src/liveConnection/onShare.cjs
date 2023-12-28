const searchParticipantInAllGroups = require('../utils/searchParticipantInAllGroups.cjs');
const emitGlobalData = require('../utils/emitGlobalData.cjs');
const { default: emitAction } = require('../utils/emitAction.cjs');

function onShare({ uniqueId }) {
    const { group } = searchParticipantInAllGroups(uniqueId);
    if (!group) return;

    group.addPoints(uniqueId, 5e3);
    emitGlobalData();
    emitAction(group.findParticipant(uniqueId), 'share');
}

module.exports = onShare;
