import express from "express";
const router = express.Router();
import { googlelogin,getUsers} from "../controllers/authController.js";

router.post("/googlelogin", googlelogin);
router.get('/',getUsers)
export default router;


