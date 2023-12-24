const findGroup = require('./findGroup.cjs');

function removeParticipant({ groupName, participantIndex }) {
    const group = findGroup(groupName);
    group.participants.splice(participantIndex, 1);
}

module.exports = removeParticipant;
