import { Router } from "express";
import { login, loginPage, register, registerPage } from "../controllers/auth.controller.js";
export const router = Router();

router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/auth/register', registerPage);
router.get('/auth/login', loginPage);
