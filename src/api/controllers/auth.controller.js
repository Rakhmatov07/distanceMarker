import User from "../../models/User.model.js";
import { signPayload } from "../../utils/jwt.js";

export async function register(req, res) {
    try {
        const { firstname, lastname, email } = req.body;
        const user = await User.findOne({ where: { email }, logging: false});

        if(user) return res.status(409).json({ message: 'User already registered' });

        const newUser = await User.create({ firstname, lastname, email }, { logging: false });

        const token = signPayload(newUser.userId);

        res.cookie('token', token);
        res.status(201).json({ message: "Success", newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });        
    }
}

export async function login(req, res) {
    try {
        const { email } = req.body;
        const user = await User.findOne({ where: { email }, logging: false });

        if(!user) return res.status(404).json({ message: 'User Not Found' });

        const token = signPayload(user.userId);

        res.cookie('token', token);
        res.status(201).json({ message: "Success", user });
    } catch (error) {
        res.status(500).json({ message: error.message });        
    }
}

export function registerPage(req, res) {
    res.render('registration')
}

export function loginPage(req, res) {
    res.render('login')
}