var socket = io();

const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

socket.emit('joinRoom', {username, room});

socket.on('roomUsers', ({ room, users }) => {
    roomHeader.innerText = `Users In ${room}`;

    userList.innerHTML=`${users.map(user => `<li class="userListItem">${user.username} ready statsu: ${user.ready}</li>`).join('')}`;
});

socket.on('startGame', () => {
    console.log('Game started')
});

$('#readyButton').click(function() {
    socket.emit('userReady')
  });

$('#startButton').click(function() {
socket.emit('startGame')
});