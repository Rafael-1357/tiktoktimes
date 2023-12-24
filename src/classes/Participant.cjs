class Participant {
    constructor(uniqueId, groupName, styles) {
        this.uniqueId = uniqueId;
        this.groupName = groupName;
        this.styles = styles;
        this.points = 0;
    }
}

module.exports = Participant;
