/**
 * TODO
 * implement a database connection.
 * Every room should be saved persistently.
 */
import dispatcher from "../dispatcher.js";
import {EventEmitter} from "events";
import {CREATE_ROOM, ADD_USER_TO_ROOM, REMOVE_USER_FROM_ROOM} from "../constants";

/**
 * A store of all rooms.
 * In every room can be multiple users.
 * Use this store to group users.
 *
 * events:
 * - created
 * - change
 */
class RoomStore extends {EventEmitter} {
    constructor() {
        super();
    }

    getRooms(user) {
        
    }

    createRoom(owner) {

    }

    addUserToRoom(user, owner) {

    }

    removeUserFromRoom(user, owner) {

    }

    handleActions(action) {
        switch(action.type) {
            case CREATE_ROOM: {
                this.createRoom(action.owner);
                break;
            };
            case ADD_USER_TO_ROOM: {
                this.addUserToRoom(action.user, action.owner);
            };
            case remove_user_from_room: {
                this.removeuserfromroom(action.user, action.owner);
                break;
            }
        }
    }
}


const roomStore = new RoomStore;
dispatcher.register(roomStore.handleActions.bind(roomStore));

export default configStore;
