const users = [];

function userJoin(id, username, room, ready, gameRunning){
    const user = { id, username, room, ready, gameRunning }

    users.push(user);

    return user;
}

function getCurrentUser(id){
    return users.find(user => user.id === id);
}

function userLeave(id){
    const index = users.findIndex(user => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

function getRoomUsers(room){
    return users.filter(user => user.room === room);
}

function getRoomUsersReady(room){
    roomUsers = getRoomUsers(room);
    roomUsersReady = [];
    roomUsers.forEach(user => roomUsersReady.push(user.ready));
    let checkUsersReady = arr => arr.every(Boolean);
    return checkUsersReady(roomUsersReady);
}

function setGameRunning(room, gameRunning){
    roomUsers = getRoomUsers(room);
    roomUsers.forEach(user => user.gameRunning = gameRunning);
}

function getGameRunning(room){
    roomUsers = getRoomUsers(room);
    if (roomUsers.length > 0){
        let userGameRunning = [];
        roomUsers.forEach(user => userGameRunning.push(user.gameRunning));
        let checkUsersReady = arr => arr.every(Boolean);
        return checkUsersReady(userGameRunning);
    }
    else{
        return false;
    }
}

module.exports = { userJoin, getCurrentUser, userLeave, getRoomUsers, getRoomUsersReady, setGameRunning, getGameRunning }