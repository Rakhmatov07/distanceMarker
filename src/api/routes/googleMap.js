import { Router } from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { getDistance, goSomewhere } from "../controllers/googleMap.controller.js";
export const router = Router();

router.post('/go', isAuth, goSomewhere);
router.post('/distance', isAuth, getDistance);
