import express from "express";
import { decode } from "jsonwebtoken";
import { getUsers,register,login,logout,token } from "../controllers/users.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

// you can put the middleware here in the middle as well
// router.get("/users",middleware,getUsers);


router.get("/users",verifyToken,getUsers);
router.post("/register", register);
router.post("/login", login);
router.delete("/logout", logout);
// going to /token if it went well then we go next and the new token is created otherwise we don't go next and one of the bad statuses happens
router.get("/token",verifyToken, token)

export default router;