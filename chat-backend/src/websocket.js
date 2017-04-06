import {Server} from "ws";
import UserStore from "./stores/UserStore";
import {connect, disconnect} from "./actions/user";
import request from "request";

function verifyAuth(cookie, clientHandler, server) {
    var options = {
        url: 'http://localhost:3001/api/v1/isAuthed',
        headers: {
            'User-Agent': 'request',
            'Cookie': cookie
        }
    }

    request.post(options, (error, response, body) => {
        let {user, success} = JSON.parse(body);
        if(!success) {
            console.log("Close connection to client due to no auth");
            clientHandler.close();
        }
        else {
            console.log("connect user: " + user);
            connect({username: user});
        }

        clientHandler.on('close', function close() {
            console.log("connection closed:" + user);
            disconnect({username: user});
        })
    });

}

var wss = new Server({port: 3434});
UserStore.on("userConnect", user => {
    wss.clients.forEach(client => {
        client.send(JSON.stringify({
            update: true,
            type: "USER_CONNECTED",
            username: user.username
        }));
    });
});

UserStore.on("userDisconnect", user => {
    console.log("disconnect");
    wss.clients.forEach(client => {
        client.send(JSON.stringify({
            update: true,
            type: "USER_DISCONNECTED",
            username: user.username
        }));
    });
});


wss.broadcast = function(data) {
    for(var i in this.clients) {
       try {
           this.clients[i].send(data);
       }
        catch(e) {

        }
    }
};


wss.on('connection', function(ws) {
    // Authenticate user
    verifyAuth(ws.upgradeReq.headers.cookie, ws, wss);

    ws.on('message', function(message) {
        console.log('received: %s', message);
        wss.broadcast(message);
    });


});



export default wss;
