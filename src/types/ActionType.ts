import ParticipantType from "./ParticipantType";

type ActionType = {
    participantInfos: { uniqueId: string, styles: { participantImage: string } } | ParticipantType;
    actionType: 'join' | 'like' | 'share' | 'follow' | 'gift';
};

export default ActionType;
