class Participant {
    constructor(uniqueId, groupName, styles) {
        this.uniqueId = uniqueId;
        this.groupName = groupName;
        this.styles = styles;
        this.points = 0;
        this.likeCounter = 0;
    }

    countLikes(likeCount, likeLimit) {
        this.likeCounter += likeCount;

        if (this.likeCounter >= likeLimit) {
            this.likeCounter = 0;
            return true;
        } else return false;
    }
}

module.exports = Participant;
