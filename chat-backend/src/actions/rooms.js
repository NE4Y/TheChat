import dispatcher from "../dispatcher";
import {ADD_USER_TO_ROOM, REMOVE_USER_FROM_ROOM, CREATE_ROOM} from "../constants";

export function createRoom(owner) {
    dispatcher.dispatch({
        type: CREATE_ROOM,
        owner
    });
}

export function addUserToRoom(user, owner) {
    dispatcher.dispatch({
        type: ADD_USER_TO_ROOM,
        roomId,
        owner
    });
}

export function removeUserFromRoom(user, owner) {
    dispatcher.dispatch({
        type: REMOVE_USER_FROM_ROOM,
        user,
        owner
    });
}
