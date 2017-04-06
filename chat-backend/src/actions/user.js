import dispatcher from "../dispatcher";
import constants from "../constants";

export function connect(user) {
    dispatcher.dispatch({
        type: constants.USER_CONNECT,
        user
    });
}

export function disconnect(user) {
    dispatcher.dispatch({
        type: constants.USER_DISCONNECT,
        user
    });
}


