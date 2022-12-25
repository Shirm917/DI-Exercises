import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/dbElephantSql.js";
import users_router from "./routes/users.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(users_router);

// middleware has three params, you can use your function
// const myMiddleware = (req,res,next) => {
//     console.log(req.body);
//     next();
// }

// you can use your function
// no route the middleware is global if you want it for a specific route put the route
// app.use("/users", myMiddleware);


app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on ${process.env.PORT || 5000}`);
});

try {
    await db.authenticate();
    console.log("Database connected...");
} catch (err) {
    console.log(err);
}
