import asyncHandler from "express-async-handler";
import Ticket from "../models/ticketModel.js";
import Template from "../models/templateModel.js";

const createTemplate = asyncHandler(async (req, res) => {
  const template = new Template({
    tickets: [
    {
      _id : "60e7141b277fee4a6754bdc3"
    }
    ],
  });
  const createdTemplate = await template.save();
  res.status(201).json(createdTemplate);
});

const getTemplate = asyncHandler(async (req, res) => {
  const template = await Template.find({}).populate("tickets._id")
  console.log(template)
  
  // console.log('templateid: ', templateid);
  // const templates = await Ticket.find({
  //   _id: { $in: ["60e709c37c0eab423103be52", "60e70ee1f2de3d45f9cb495a"] },
  // });

  res.json({ template });
});

export { createTemplate, getTemplate };
