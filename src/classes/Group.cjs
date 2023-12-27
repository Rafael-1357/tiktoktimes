const Participant = require('./Participant.cjs');
const sortListForPoints = require('../utils/sortListForPoints.cjs');
const searchParticipantsInAllGroups = require('../utils/searchParticipantInAllGroups.cjs');
const removeParticipant = require('../utils/removeParticipant.cjs');

class Group {
    constructor(name, aliases, styles) {
        this.name = name;
        this.styles = styles;
        this.points = 0;
        this.aliases = aliases;
        this.participants = [];

        global.data.push(this);
    }

    findParticipant(uniqueId) {
        return this.participants.find(participant => participant.uniqueId === uniqueId);
    }

    addParticipant(uniqueId, imageUrl) {
        const participantStyles = {
            participantImage: imageUrl,
        };

        const { group, participantIndex } = searchParticipantsInAllGroups(uniqueId);
        if (group) {
            if (group.name !== this.name) {
                removeParticipant({ groupName: group.name, participantIndex });
                const newParticipant = new Participant(uniqueId, this.name, participantStyles);
                this.participants.push(newParticipant);
                return newParticipant;
            }
        } else {
            const newParticipant = new Participant(uniqueId, this.name, participantStyles);
            this.participants.push(newParticipant);
            return newParticipant;
        }
    }

    addPoints(uniqueId, points) {
        const participant = this.findParticipant(uniqueId);
        participant.points += points;
        this.points += points;
        sortListForPoints(this.participants);
        sortListForPoints(global.data);
    }
}

module.exports = Group;
