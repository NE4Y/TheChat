import {Router} from "express";
import User, {Contact} from "../model/User";
import UserStore from "../stores/UserStore";

const router = new Router;

function getUser(username) {
    return User.findOne({where: {username}});
}

router.get("/contacts", (req, res) => {
    getUser(req.session.user.username)
        .then(user => {
            user.getContacts().then(contacts => {
                    res.json({
                        result: contacts.map(c => {
                            return {
                                contactName: c.contactName,
                                online: UserStore.connectedUsers[c.contactName] || false
                            }
                        }),
                        success: true,
                        code: 200
                    })
                })
                .catch(() => {
                    res.status(500).json({
                        success: false,
                        code: 500,
                        message: "No users found"
                    });
                });
        });
});

router.post("/addContact", (req, res) => {
    getUser(req.session.user.username)
        .then(user => {
            user.pushContact(req.body.username)
                .then(() => {
                    res.json({
                        success: true,
                        message: `added user ${req.body.username} to contacts`
                    });
                })
                .catch((e) => {
                    res.json({
                        success: false,
                        message: `user ${req.body.username} could not be added.`,
                        reason: e.reason || "unknown",
                        code: 400
                    })
                });
        });
});

router.post("/deleteContact", (req, res) => {
    Contact.findOne({where: {userUsername: req.session.user.username, contactName: req.body.username}}).then(result => {
        result.destroy()
    }).then(() => {
            console.log("res json");
            res.json({
                success: true,
                message: `delete user ${req.body.username} from contacts`
            });
        })
        .catch((e) => {
            console.log(e);
            res.json({
                success: false,
                message: `user ${req.body.username} could not be removed`,
                code: 400
            })
        });
});

export default router;
