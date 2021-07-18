import express from "express";
import Ticket from '../models/ticketModel.js'


const router = express.Router();

import { sendEmail } from "../controllers/emailController.js";

router.get("/sendmail/:id", async(req, res) => {

    const ticketData = await Ticket.find({ Createdby: req.params.id })
    .where({ isSelectedticket: true });
    
    res.render('email', {
        ticketData
    });
})

router.post("/sendmail/:id", async(req, res) => {

    const ticketData = await Ticket.find({ Createdby: req.params.id })
    .where({ isSelectedticket: true });
    
    
    sendEmail(req.body.email, req.body.name,req.body.cc, ticketData)

})

export default router;
