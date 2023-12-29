import $ from 'jquery';
import GroupType from '../types/GroupType';
import Participant from './Participant';
import formatNames from '../utils/formatNames';

function Group(groupInfos: GroupType, groupIndex: number) {
    const GroupStyles = {
        top: `${groupIndex * 65}px`,
        background: `${groupInfos.styles.backgroundColor}`
    };

    const groupContainer = $(`
        <div class="team" id="${formatNames(true, groupInfos.name)}">
            <img src='${groupInfos.styles.groupImage}' class="team-picture">
            <div class="team-interaction">
                <span class="team-fans-count"> ${groupInfos.name} • ${groupInfos.participants.length} Torcedores</span>
                <div class="team-fans"></div>
            </div>
        </div>
    `).css(GroupStyles);

    const participants = groupInfos.participants.map((participant, index) => Participant(participant, index));
    const teamFansContainerEl = groupContainer.find('.team-fans');
    participants.forEach(participantEl => teamFansContainerEl.append(participantEl));

    return groupContainer;
}

export default Group;
