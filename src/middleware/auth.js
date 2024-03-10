import jwt from "jsonwebtoken";
import "dotenv/config";

exports.authMiddleware = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({message: "NON-Authorired - token missing" })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if (err) {
            return res
            .status(401)
            .json({message: "NON-Authorired - token missing"})
        }
    })
}