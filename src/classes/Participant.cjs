class Participant {
    constructor(name, groupName, styles) {
        this.name = name;
        this.groupName = groupName;
        this.styles = styles;
        this.position = global.data.participants.length;
        global.data.participants.push(this);
    }

    static findParticipant() {
        
    }
}

module.exports = Participant;
