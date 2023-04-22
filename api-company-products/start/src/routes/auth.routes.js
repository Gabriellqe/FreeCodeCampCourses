import { Router } from "express";
import {
  signinHandler,
  signupHandler,
} from "../controllers/auth.controller.js";
const router = Router();

router.post("/signup", signupHandler);

router.post("/signin", signinHandler);

export default router;
