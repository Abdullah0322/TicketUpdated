import express from "express";
const router = express.Router();

import { sendEmail } from "../controllers/emailController.js";

router.post("/sendmail", (req, res) => {

    console.log(req.body)
    sendEmail(req.body.email, req.body.name,req.body.useremail,req.body.cc)

})

export default router;
