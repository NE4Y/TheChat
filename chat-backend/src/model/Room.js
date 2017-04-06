import db from "../db";
import Sequelize from "sequelize";
import {user} from "./User";

const Room = db.define("Room", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    }
}, {
    instanceMethods: {
        addUser: function(user) {
            user.getDb().then(u => {
                this.addUser(u.username);
            });
        }
    }
});

const UserRoom = db.define("UserRoom", {
});
Room.belongsToMany(user, {through: UserProject });
user.belongsToMany(Room, {through: UserProject });

export default Room;
