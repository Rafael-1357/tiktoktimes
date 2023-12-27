import { io } from "socket.io-client";
const socket = io("http://localhost:3001");
import $ from 'jquery';

socket.on('initialData', (data) => {
    console.log(data);
});

socket.on('add', (newParticipant) => {
    console.log(newParticipant);
});

$(document).ready(function(){
			/* a função muda o background da div com id="box" */	
		$("#content").css("background","#f00");
});