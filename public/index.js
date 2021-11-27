var socket = io();

const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

socket.emit('joinRoom', {username, room});

socket.on('roomUsers', ({ room, users }) => {
    roomHeader.innerText = `Users In ${room}`;

    userList.innerHTML=`${users.map(user => `<li class="list-group-item">${user.username} ${user.leader ? '<i class="fas fa-crown iconPadding"></i>' : ""}<span class="${user.ready?"statusReady":"statusNotReady"}">${user.ready?"ready":"not ready"}<span></li>`).join('')}`;
});

socket.on('leader status', (leader) => {
    if(leader){
        $('#returnButton').show();
        $('#startButton').show();
    }
    else{
        $('#returnButton').hide();
        $('#startButton').hide();
    }
});

socket.on('startGame', ({ location, sus }) => {
    var hidden = false;
    if(sus){
        $('#locationTitle').text('Spy');
        $('#locationImage').attr('src', 'images/sus.png');

        $('#hideButton').click(function() {
            if(!hidden){
                $('#locationTitle').text('Hidden');
                $('#locationImage').attr('src', 'images/question.png');
                hidden = true;
            }
            else{
                $('#locationTitle').text('Spy');
                $('#locationImage').attr('src', 'images/sus.png');
                hidden = false;
            }
        });
    }
    else{
        $('#locationTitle').text(location.slice(0, -4));
        $('#locationImage').attr('src', 'locations/' + location);

        $('#hideButton').click(function() {
            if(!hidden){
                $('#locationTitle').text('Hidden');
                $('#locationImage').attr('src', 'images/question.png');
                hidden = true;
            }
            else{
                $('#locationTitle').text(location.slice(0, -4));
                $('#locationImage').attr('src', 'locations/' + location);
                hidden = false;
            }
        });
    }
    $('.notStarted').hide();
    $('.started').show();
});

socket.on('restartGame', () =>{
    $('.notStarted').show();
    $('.started').hide();
})

$('#readyButton').click(function() {
    socket.emit('userReady');
  });

$('#startButton').click(function() {
    socket.emit('startGame');
});

$('#returnButton').click(function() {
    socket.emit('restartGame');
})