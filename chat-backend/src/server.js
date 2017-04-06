import express from "express";
import path from "path";
import logger from "morgan";
import helmet from "helmet";
import compression from "compression";
import http from "http";
import pe from "pretty-error";
import user from "./route/user";
import bodyParser from "body-parser";
import websocket from "./websocket";
import session from "express-session";
import config from "./config";
import colors from "colors";
import contacts from "./route/contacts";
import db from "./db";
import connectSequelize from "connect-sequelize";


//nicer error output
pe.start();

//main app
let app = express();
//create a server
let server = http.Server(app);

let router = express.Router();

app.use(logger((process.env.NODE_ENV === "development" ? "dev" : "combined")));
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let SequelizeStore = connectSequelize(session);
app.use(session({
    secret: config.secret || "dsjfpsdof",
    store: new SequelizeStore(db, {}, "Session"),
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use("/api/v1", user);

//For all other routes please use the Routing framework.
//This will normally be rest api routes.
app.use("/api/v1/:id", (req, res, next) => {
    if(req.session.user && req.session.user.username === req.params.id) {
        next();
    } else {
        res.status(403).send({
            success: false
        });
    }
});

app.use("/api/v1/:id", contacts);

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        success: false,
        code: err.status || 500,
    });
});

app.use((req, res) => {
    res.status(404);
    res.json({
        success: false,
        code: 404,
    });
});

export default {
    start: function() {
        let port = config.port || 3000;
        server.listen(port, function() {
            let screen = `
+-----------------------------------------------+
|                                               |
|       Chat is Running on Port ${port}            |
|                                               |
|                                               |
|                      XXXXXXXXX                |
|                    XXX       XXX              |
|   +--------->      X  XXX XXX  X  +------>    |
|                    X  X X X X  X              |
|              XXXXXXX  XXX XXX  X              |
|            XX      X           X    +--->     |
|    +---->  X       XXX       XXX              |
|           X          XXXXXXXXX                |
|           X              X                    |
|           X              X      +------->     |
|           XXXXXX XXXXXXXXX                    |
|                                               |
|                                               |
+-----------------------------------------------+
`;
            console.log(colors.green(screen));
        });
    }
}
