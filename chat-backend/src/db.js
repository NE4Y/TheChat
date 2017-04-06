import Sequelize from "sequelize";
import config from "./config";
import colors from "colors";

const pathToDatabase = config.pathToDatabase || "chat";
const standardDBPassword = config.dbPassword || "chat";
const standardDBAdmin = config.dbAdmin || "chat";

if(!config.dbPassword) {
    console.warn(colors.yellow.bold("Warning: Please change the database password."));
}

let sequlize = new Sequelize(pathToDatabase, "username", "password", config.db);

export default sequlize;
