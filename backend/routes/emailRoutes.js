import express from "express";
import Ticket from '../models/ticketModel.js'


const router = express.Router();

import { sendEmail } from "../controllers/emailController.js";

router.get("/sendmail", async(req, res) => {

    const ticketData = await Ticket.find();
    
    
    res.render('email', {
        ticketData
    });
})

router.post("/sendmail", async(req, res) => {

    const ticketData = await Ticket.find();
    
    sendEmail(req.body.email, req.body.name,req.body.cc, ticketData)

})

export default router;
