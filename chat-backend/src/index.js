"use strict";

/**
 * Create a cluster of the application
 * to improve performance
 */

import cluster from "cluster";
import os from "os";
import server from "./server";

let cpus = os.cpus().length;

if(cluster.isMaster && process.env.NODE_ENV === "production") {
    for(let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on("exit", () => {
        //console.log("worker " + worker.process.pid + " died");
    });
} else {
    server.start();
}
