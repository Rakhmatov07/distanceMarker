import User from "../../models/User.model.js";
import { verifyPayload } from "../../utils/jwt.js";

export async function isAuth(req, res, next) {
    try {
        const { token } = req.cookies;
        const userId = verifyPayload(token);
        if(!userId) return res.status(403).json({ message: 'Invalid token' });
        
        const user = await User.findOne({ where: { userId }, logging: false });
        if(!user) return res.status(404).json({ message: "User Not Found" });

        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}