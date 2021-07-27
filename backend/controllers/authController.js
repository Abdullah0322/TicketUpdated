import { response } from "express";
import asyncHandler from "express-async-handler";
import { OAuth2Client } from "google-auth-library";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import Ticket from "../models/ticketModel.js";
const client = new OAuth2Client(
  "807669913381-iekknmo55r3uv11orerdfm3sbi8v3opo.apps.googleusercontent.com"
);
const googlelogin = asyncHandler(async (req, res) => {
  const { tokenId } = req.body;
  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "807669913381-iekknmo55r3uv11orerdfm3sbi8v3opo.apps.googleusercontent.com",
    })
    .then((response) => {
      const { email, name, email_verified } = response.payload;
      console.log(response.payload);

      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              error: "SOmething went wrong",
            });
          } else {
            if (user) {
              const token = generateToken(user._id);
              const { _id, name, email,isAdmin } = user;
              res.json({ token, user: { _id, name, email,isAdmin} });
            } else {
              let password = email + process.env.JWT_SECRET;
              let newUser = new User({ name, email, password });
              newUser.save((err, data) => {
                if (err) {
                  return res.status(400).json({
                    error: "SOmething went wrong",
                  });
                }
                const token = generateToken(data._id);
                const { _id, name, email, isAdmin } = newUser;
                res.json({ token, user: { _id, name, email, isAdmin } });
              });
            }
          }
        });
      }
    });
});
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.json({ users });
});

const getTicketsss = asyncHandler(async (req, res) => {
  const id = User.findById(req.params.id);
  console.log("id", req.params.id);
  const tickets = await Ticket.find({ Createdby: req.params.id,isSelectedticket:true });
  console.log(tickets);
   res.json({ tickets });
});

export { googlelogin, getUsers, getTicketsss };
