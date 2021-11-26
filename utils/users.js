const users = [];

function userJoin(id, username, room, ready, gameRunning, sus, leader){
    const user = { id, username, room, ready, gameRunning, sus, leader }

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

function resetUsersReady(room){
    roomUsers = getRoomUsers(room);
    roomUsers.forEach(user => user.ready = false);
}

function getGameRunning(room){
    roomUsers = getRoomUsers(room);
    if (roomUsers.length > 0){
        let userGameRunning = [];
        roomUsers.forEach(user => userGameRunning.push(user.gameRunning));
        let checkGameRunning = arr => arr.every(Boolean);
        return checkGameRunning(userGameRunning);
    }
    else{
        return false;
    }
}

function setImposter(room){
    roomUsers = getRoomUsers(room);
    imposterNumber = Math.floor(Math.random()*roomUsers.length);
    roomUsers[imposterNumber].sus = true;
}

function resetImposter(room){
    roomUsers = getRoomUsers(room);
    roomUsers.forEach(user => user.sus = false);
}

function setNewLeader(room){
    roomUsers = getRoomUsers(room);
    validUsers = roomUsers.filter(user => user.leader !== true);
    imposterNumber = Math.floor(Math.random()*validUsers.length);
    validUsers[imposterNumber].leader = true;
}

module.exports = { userJoin, getCurrentUser, userLeave, getRoomUsers, getRoomUsersReady, setGameRunning, getGameRunning, resetUsersReady, setImposter, setNewLeader, resetImposter }