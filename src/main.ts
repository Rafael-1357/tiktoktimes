import { io } from "socket.io-client";
import $ from 'jquery';
import GroupType from "./types/GroupType";

import Group from "./components/Group";

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