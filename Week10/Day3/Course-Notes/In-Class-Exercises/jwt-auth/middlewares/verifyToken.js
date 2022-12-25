import jwt from "jsonwebtoken";
// even if the token if correct check if the email exists
import Users from "../model/usersModel.js";

export const verifyToken = (req,res,next) => {
    // or get from headers for some mobile phones because they don't store in http so we put the access token in the headers, use in the brackets whatever you called it
    const accessToken = req.cookies.accessToken || req.headers["x-access-token"];

    if(!accessToken) return res.status(401).json({msg: "permission denied"});

    jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET, async(err,decode) => {
        if(err) return res.status(403).json({msg: "verify token failed"});
        // check if email exists if yes we will do next if not then we will return and not go to next
        // we awaiting because we are using find all and we need to find them all before we continue
        // const email = decode.email
        try {
            const user = await Users.findAll({
                where: {
                    email: decode.email
                }
            });
            next();  // we can do next meaning we verified our token and we can move on.
        } catch (err) {
            // if our verify for our user failed we don't move on because we go to the catch
            res.status(403).json({msg: "verify user failed"});
        }

    })
}
