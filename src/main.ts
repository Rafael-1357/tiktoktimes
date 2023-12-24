import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

socket.on('initialData', (data) => {
    console.log(data);
});

socket.on('add', (newParticipant) => {
    console.log(newParticipant);
});
