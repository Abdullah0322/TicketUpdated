import express from "express";
const router = express.Router();
import { googlelogin,getUsers,getTicketsss} from "../controllers/authController.js";

router.post("/googlelogin", googlelogin);
router.get('/',getUsers)
router.get('/:id',getTicketsss)
export default router;


