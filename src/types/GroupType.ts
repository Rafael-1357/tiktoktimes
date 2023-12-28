import ParticipantType from "./ParticipantType";

type GroupType = {
    name: string;
    styles: any;
    points: number;
    aliases: string[];
    participants: ParticipantType[];
}

export default GroupType;
