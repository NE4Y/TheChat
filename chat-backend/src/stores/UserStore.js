import {EventEmitter} from "events";
import dispatcher from "../dispatcher";
import constants from "../constants";

/**
 * A store the connected users are tracked.
 *
 * Events:
 * - userConnect
 * - userDisconnect
 *
 */
class UserStore extends EventEmitter {
    constructor() {
        super();
        this.connectedUsers = {};
    }

    addConnectedUser(user) {
        console.log(`user ${user.username} came online`);
        this.connectedUsers[user.username] = user;
        this.emit("userConnect", user);
    }

    removeConnectedUser(user) {
        console.log(`user ${user.username} went offline`);
        delete this.connectedUsers[user.username];
        this.emit("userDisconnect", user);
    }

    handleActions(action) {
        switch(action.type) {
            case constants.USER_CONNECT: {

                this.addConnectedUser(action.user);
                break;
            }
            case constants.USER_DISCONNECT: {
               
                this.removeConnectedUser(action.user);
                break;
            }
        }
    }
}
const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;
