import $ from 'jquery';
import ParticipantType from '../types/ParticipantType';
import formatNames from '../utils/formatNames';

function Participant(participantInfos: ParticipantType, participantIndex: number) {
    const ParticipantStyles = {
        left: `${participantIndex * 40}px`,
    };

    const participantPoints = participantInfos.points < 1000
        ? participantInfos.points
        : (participantInfos.points / 1e3).toFixed(1).replace(',0', '').concat('K');

    return $(`
        <div class="fan-absolute" id="${formatNames(false, participantInfos.uniqueId)}">
            <div class="fan">
                <img src='${participantInfos.styles.participantImage}'>
                <span class="fan-points">${participantPoints}</span>
            </div>
        </div>
    `).css(ParticipantStyles);
}

export default Participant;
