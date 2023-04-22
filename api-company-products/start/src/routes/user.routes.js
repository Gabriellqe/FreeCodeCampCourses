import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";
import { isModerator, isAdmin, verifyToken } from "../middlewares/authjwt.js";
import { checkExistingUser } from "../middlewares/verifySignup.js";

const router = Router();
router.post("/", [verifyToken, isAdmin, checkExistingUser], createUser);
export default router;
