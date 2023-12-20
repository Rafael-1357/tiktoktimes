class Group {
    constructor(name, aliases, styles) {
        this.name = name;
        this.styles = styles;
        this.points = 0;
        this.aliases = aliases;
        global.data.groups.push(this);
    }

    static findGroup(groupName) {
        return global.data.groups.find(group => group.aliases.includes(groupName) || this.name === groupName);
    }

    getParticipants() {
        return global
            .data
            .participants
            .filter(participant => participant.groupName === this.name);
    }

    recalculatePoints() {
        this.points = this.getParticipants().reduce((acc, { points }) => acc + points);
    }

    sortParticipants() {
        const participants = this.getParticipants();
    }
}

module.exports = Group;
