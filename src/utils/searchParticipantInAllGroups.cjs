function searchParticipantInAllGroups(uniqueId) {
    for (const group of global.data) {
        const participantIndex = group.participants
            .findIndex(participant => participant.uniqueId === uniqueId);

        if (participantIndex >= 0) return { groupName: group.name, participantIndex };
    }

    return { groupName: null, participantIndex: null };
}

module.exports = searchParticipantInAllGroups;
