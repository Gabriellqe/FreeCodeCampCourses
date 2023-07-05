import { Router } from "express";
import {
  createUser,
  getUsers,
  updateUserById,
  deleteUserById,
} from "../controllers/user.controllers";

const router = Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.put("/users/:id", updateUserById);
router.delete("/users/:id", deleteUserById);

export default router;
