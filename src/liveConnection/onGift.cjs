const searchParticipantInAllGroups = require('../utils/searchParticipantInAllGroups.cjs');

function onGift({ uniqueId, giftId }) {
    const giftPoints = { '5655': 100, '5658': 3e3, '5886': 3e5 };
    const { group } = searchParticipantInAllGroups(uniqueId);
    group.addPoints(uniqueId, giftPoints[giftId]);
}

module.exports = onGift;
