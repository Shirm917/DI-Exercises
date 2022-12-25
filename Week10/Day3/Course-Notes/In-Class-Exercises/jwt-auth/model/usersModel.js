import { Sequelize } from "sequelize";
import db from "../config/dbElephantSql.js";

const {DataTypes} = Sequelize;

// id, createdAt, updatedAt columns are required in sequelize
// in this we write the column names in the table and their type in an object
const Users = db.define("users", {
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
    // ,
    // createdAt: {
    //     field: createdat (tell sequalize that createdAt that they are looking for is called this in our db, field is our column name)
    // }
    
}, 
{
    timestamps: false // ignore that we didn't create those columns, if we did include them then don't put this
}

);

export default Users;
