import express from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = express.Router();

// router.post("/register", productRouter); // Ensure it's a POST route
router.post("/register/User", registerUser); // Ensure it's a GET route

export default router;
