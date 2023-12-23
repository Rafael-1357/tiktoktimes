import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

const interactions = document.getElementById('interactions')

socket.on('follow', ({ profilePictureUrl }) => {
    // console.log(msg)
    interactions.innerHTML += `
    <div class="user-notification follow">
    <img src="${profilePictureUrl}" alt="">
    <span><svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#605c5c" d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z"/></svg></span>
    </div>
    `
    interactions.scrollTop = interactions.scrollHeight
})


