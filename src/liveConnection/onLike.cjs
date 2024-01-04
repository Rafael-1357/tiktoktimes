const searchParticipantInAllGroups = require('../utils/searchParticipantInAllGroups.cjs');
const emitGlobalData = require('../utils/emitGlobalData.cjs');

function onLike({ uniqueId, likeCount }) {
    const { group, participantIndex } = searchParticipantInAllGroups(uniqueId);
    if (!group) return;

    const { countLikes } = group[participantIndex];
    const toScore = countLikes(likeCount, 30);

    if (toScore) {
        group.addPoints(uniqueId, 100);
        emitGlobalData();
    }
}

module.exports = onLike;
