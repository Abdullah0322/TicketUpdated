import express from "express";
const router = express.Router();
import { googlelogin } from "../controllers/authController.js";

router.post("/googlelogin", googlelogin);
export default router;


