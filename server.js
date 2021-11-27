const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');
const { userJoin, getCurrentUser, userLeave, getRoomUsers, getRoomUsersReady, setGameRunning, getGameRunning, resetUsersReady, setImposter, setNewLeader, resetImposter } = require('./utils/users');
const { getRandomLocation } = require('./utils/locations');
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on('joinRoom', ({username, room}) => {
        if (!getGameRunning(room)){
            const user = userJoin(socket.id, username, room, false, false, false, false);

            socket.join(user.room);

            if(getRoomUsers(user.room).length == 1){
                getCurrentUser(socket.id).leader = true;
            };
            
            getRoomUsers(user.room).forEach(user => io.to(user.id).emit('leader status', user.leader));
            io.in(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
        else{
            socket.disconnect();
        }
    })

    socket.on('userReady', () => {
        user = getCurrentUser(socket.id);
        user.ready = !user.ready;
        io.in(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    })

    socket.on('startGame', () => {
        user = getCurrentUser(socket.id);
        if (getRoomUsersReady(user.room)){
            setGameRunning(user.room, true);
            setImposter(user.room);
            //getRoomUsers(user.room).forEach(user => io.to(user.id).emit('leader status', user.leader));
            getRoomUsers(user.room).forEach(user => io.to(user.id).emit('startGame', { 
                location: getRandomLocation(),
                sus: user.sus 
            }
        ));
     }});

    socket.on('restartGame', () => {
        user = getCurrentUser(socket.id);
        
        setGameRunning(user.room, false);
        resetUsersReady(user.room);
        resetImposter(user.room);

        io.in(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });

        io.in(user.room).emit('restartGame');
    })

    socket.on('disconnect', () => {
        checkingLeader = getCurrentUser(socket.id);
        if(typeof(checkingLeader) !== "undefined"){
            if(getRoomUsers(checkingLeader.room).length > 1){
                if(checkingLeader.leader){
                    setNewLeader(checkingLeader.room);
                }
            }
            getRoomUsers(checkingLeader.room).forEach(user => io.to(user.id).emit('leader status', user.leader));
        }
        const user = userLeave(socket.id);
        if (user){
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    })
})

server.listen(PORT, () => {
  console.log(`listening on ${ PORT }`);
});