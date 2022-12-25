import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// paramters, all of it the connection string, the three process.env to connect to dbname, dbuser, and dbpass 
// and the object that connects to the host and the dialect you are using
const db = new Sequelize(process.env.DB_NAME,
                         process.env.DB_USER,
                         process.env.DB_PASS,
    {
    host: process.env.DB_HOST,
    dialect: "postgres"
    }
);

export default db;                                           