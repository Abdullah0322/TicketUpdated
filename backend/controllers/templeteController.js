import asyncHandler from "express-async-handler";
import Ticket from "../models/ticketModel.js";
import Template from "../models/templateModel.js";

const createTemplate = asyncHandler(async (req, res) => {
  const template = new Template({
    user: req.body.id,
    // // tickets: [
    // // {
    // //   _id : "60e7141b277fee4a6754bdc3"
    // // }
    // ],
  });
  const createdTemplate = await template.save();
  res.status(201).json(createdTemplate);
});

const getTemplate = asyncHandler(async (req, res) => {
  // const template = await Template.find({}).populate("tickets._id")
  // console.log(template)
  const id = Template.findById(req.params.id);
  console.log("id", req.params.id);
  const tickets = await Ticket.find({
    "isSelected.item": { $in: [req.params.id] },
  });
  console.log(tickets);

  res.json({ tickets });
});

const deleteTemplate = asyncHandler(async (req, res) => {
  const template = await Template.findById(req.params.id);

  if (template) {
    await template.remove();
    res.json({ message: "Template removed" });
  } else {
    res.status(404);
    throw new Error("Template not found");
  }
});
const getTemp = asyncHandler(async (req, res) => {
  const templates = await Template.find({ user: req.params.id });

  res.json({ templates });
});

export { createTemplate, getTemplate, getTemp, deleteTemplate };
