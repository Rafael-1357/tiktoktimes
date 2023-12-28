import { io } from "socket.io-client";
import $ from 'jquery';

import Group from "./components/Group";
import ActionPopup from "./components/ActionPopup";

import GroupType from "./types/GroupType";
import ActionType from "./types/ActionType";

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

socket.on('updateGroups', (data) => {
    console.log(data);
});

socket.on('newAction', (action: ActionType) => ActionPopup(action));
