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

    const timerInterval = setInterval(() => {
        if(min === 0 && seg === 0){
            socket.emit('onTimer')
            clearInterval(timerInterval)
        };       
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

socket.on('onWinModel', (data: GroupType[]) => {
    const maxPoint = data.reduce(function(prev, current) { 
        return prev.points > current.points ? prev : current; 
    });
    $('#winModal').css('display', 'flex');
    $('#escudo').attr('src', `../public/${maxPoint.styles.groupImage}`);
    $('#time-pontos').text(`${maxPoint.points}`);
    $('#ouro-img').attr('src', `${maxPoint.participants[0] == undefined ? '../public/images/avatar.jpg' : maxPoint.participants[0].styles.participantImage}`);
    $('#prata-img').attr('src', `${maxPoint.participants[1] == undefined ? '../public/images/avatar.jpg' : maxPoint.participants[1].styles.participantImage}`);
    $('#bronze-img').attr('src', `${maxPoint.participants[2] == undefined ? '../public/images/avatar.jpg' : maxPoint.participants[2].styles.participantImage}`);
    $('#ouro-pontos').text(`${maxPoint.participants[0] == undefined ? '0' : maxPoint.participants[0].points}`)
    $('#prata-pontos').text(`${maxPoint.participants[1] == undefined ? '0' : maxPoint.participants[1].points}`)
    $('#bronze-pontos').text(`${maxPoint.participants[2] == undefined ? '0' : maxPoint.participants[2].points}`)

    setTimeout(() => {
        $('#winModal').css('display', 'none');
        
        timer()
    }, 5000)

})


timer()

socket.on('newAction', (action: ActionType) => ActionPopup(action));
