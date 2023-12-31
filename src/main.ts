import { io } from "socket.io-client";
import $ from 'jquery';

import Group from "./components/Group";
import ActionPopup from "./components/ActionPopup";

import GroupType from "./types/GroupType";
import ActionType from "./types/ActionType";

import formatNames from "./utils/formatNames";

const socket = io("http://localhost:3001");
const teamsContainer = $('#teams');

socket.on('initialData', (data: GroupType[]) => {
    teamsContainer.empty();
    data.forEach((group, index) => {
        teamsContainer.append(Group(group, index));
    });
});

socket.on('resetGroups', (data: GroupType[]) => {
    teamsContainer.empty();
    data.forEach((group, index) => {
        teamsContainer.append(Group(group, index));
    });
});

socket.on('updateGroups', (data: GroupType[]) => {
    data.forEach(({ name, participants}, groupIndex) => {
        $(`#${formatNames(true, name)}`).css('top', `${groupIndex * 65}px`);

        participants.forEach(({ uniqueId, points }, participantIndex) => {
            const participantEl = $(`#${formatNames(false, uniqueId)}`);
            participantEl.css('left', `${participantIndex * 40}px`);
            participantEl.find('.fan-points').text(points);
        });
    });
});


function timer() {
    let min = 4;
    let seg = 60;

    setInterval(() => {
        if(min === 0 && seg === 0) window.location.reload( );       
        if (seg !== 0) {
            seg--
            if(seg === 0 && min > 0){
                setTimer(min, seg)
                min--
                seg = 60
                return
            }
            setTimer(min, seg)}}, 1000)
}

function setTimer(min, seg) {
    $('#timer').text(`${'0'+min}:${seg < 10 ? '0'+seg : seg}`)
}

timer()

socket.on('newAction', (action: ActionType) => ActionPopup(action));
