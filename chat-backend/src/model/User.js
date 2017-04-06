import crypto from "crypto";
import db from "../db";
import Sequelize from "sequelize";
import config from "../config";
import colors from "colors";
import UserStore from "../stores/UserStore";

const standardAdminPassword = config.adminPassword || "chatchatchat";
const standardAdminUsername = config.adminUsername || "admin";
const minPasswordLength = config.minPasswordLength || 10;

//Database connection to the users
const User = db.define("users", {
    username: {
        type: Sequelize.STRING,
        primaryKey: true,
        set: function (val) {
            if (val.trim() === "")
                throw "incorrect username";
            this.setDataValue("username", val);
        }
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        set: function (val) {
            if (val.length < minPasswordLength) throw "password to short";
            this.setDataValue("password",
                crypto.createHash("md5")
                    .update(val)
                    .digest("hex")
            );
        }
    },
    admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    instanceMethods: {
        checkPassword: function (password) {
            return this.password === crypto.createHash("md5").update(password).digest("hex");
        },
        pushContact: function (username) {
            return new Promise((resolve, reject) => {
                User.findOne({where: {username}})
                .then(result => {
                    if(!result) {
                        console.log("user doesnt exist");
                        reject({reason: "user doesnt exist"});
                    } else {
                        Contact.findOne({where: {userUsername: this.dataValues.username, contactName: username}}).then(result => {
                            if (result) {
                                reject({reason: "contact exists"})
                            }
                            else {

                                Contact.create({contactName: username})
                                    .then(contact => {
                                        this.addContact(contact).then(resolve).catch(reject);
                                    }).catch(reject)
                            }
                        }).catch(reject);
                    }


                }).catch(reject)
            });
        }
    },
    freezeTableName: true
});

const Contact = db.define("contact", {
    contactName: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});
User.hasMany(Contact, {as: "Contacts"});

Contact.sync();

//Always update or create the admin user.
User.sync().then(() => {
    User.upsert({
        username: standardAdminUsername,
        password: standardAdminPassword,
        admin: true
    }).then(() => {
        console.log("updated admin user");
        if (!config.standardPassword || config.standardPassword === standardAdminPassword)
            console.warn(colors.yellow.bold("Warning: Please reset the standard password of the admin user!!!"));
    });
});

export default User;
export {Contact}
