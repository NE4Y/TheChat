import express from "express";
import User from "../model/User";
import config from "../config";

let router = express.Router();

router.post("/authenticate", (req, res) => {
    User.findOne({where: {username: req.body.username}})
    .then(user => {
        if(user.checkPassword(req.body.password)){
            req.session.user = user;
            req.session.authenticated = true;
            res.json({
                success: true,
                code: 200,
                message: "successfully authenticated"
            });
        } else {
            throw new Error("Wrong password");
        }
    })
    .catch(e => {
        res.status(403).json({
            success: false,
            code: 403,
            message: "Authentication failed."
        });
    });
});

router.authenticate = (req, res, next) => {
    console.log("authentication: " + req.session);
    if(req.session.authenticated) {
        next();
    }
    else {
        res.status(403).json({
            success: false,
            code: 403,
            message: "Not authenticated"
        });
    }
};

router.post("/isAuthed", router.authenticate, (req, res) => {
    res.status(200).json({
        success: true,
        code: 200,
        message: "Authenticated",
        user: req.session.user.username
    });
})

router.get("/logout", (req, res) => {
    delete req.session.user;
    req.session.authenticated = false;
    res.json({
        code: 200,
        success: true,
        message: "User successfully logged out."
    });
});

router.post("/register", (req, res) => {
    User.create({username: req.body.username, password: req.body.password})
        .then(user => {
            res.json({
                code: 200,
                success: true,
                message: "user " + user.username + " created"
            });
        })
        .catch((e) => {
            res.json({
                code: 500,
                success: false,
                message: "User could not be registered. Please try a different username."
            });
        });
});


export default router;
