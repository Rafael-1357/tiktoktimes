class Group {
    constructor(name, styles) {
        this.name = name;
        this.styles = styles;
    }

    getParticipants() {
        return global
                .data
                .participants
                .filter(participant => participant.groupName === this.name);
    }
}

module.exports = Group;
