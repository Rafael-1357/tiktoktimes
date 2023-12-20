class Participant {
    constructor(uniqueId, groupName, styles) {
        this.uniqueId = uniqueId;
        this.groupName = groupName;
        this.styles = styles;
        this.points = 0;

        global.data.participants.push(this);
        this.position = global.data.participants.length;
    }

    static findParticipant(uniqueId) {
        return global.data.participants.find(participant => participant.uniqueId === uniqueId);
    }
}

module.exports = Participant;
