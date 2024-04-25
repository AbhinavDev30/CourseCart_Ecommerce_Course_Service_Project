import express from "express";
import { login, register } from "../controller/userController.js";
import { validate } from "../middlewares/middleware.js";
import signupSchema from "../Validators/userValidator.js";

const router = express.Router();

router.post("/register", validate(signupSchema), register);
router.post("/login", login);
// router.get("/user", authMiddleware, user);

export default router;
