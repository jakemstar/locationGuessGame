const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');
const { userJoin, getCurrentUser, userLeave, getRoomUsers, getRoomUsersReady, setGameRunning, getGameRunning } = require('./utils/users');
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on('joinRoom', ({username, room}) => {
        if (!getGameRunning(room)){
            const user = userJoin(socket.id, username, room, false, false);

            socket.join(user.room);

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
        user.ready = true;
        io.in(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    })

    socket.on('startGame', () => {
        user = getCurrentUser(socket.id);
        if (getRoomUsersReady(user.room)){
            setGameRunning(user.room, true);
            user = getCurrentUser(socket.id);
            io.in(user.room).emit('startGame');
        }
    });


socket.on('disconnect', () => {
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