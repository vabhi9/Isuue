import express from "express";
import { dynamicFilter, registerProduct } from "../controllers/product.controller.js";

const router = express.Router();

// router.post("/register", productRouter); // Ensure it's a POST route
router.get("/register", registerProduct); // Ensure it's a GET route
router.get("/register/:category", dynamicFilter)

export default router;
