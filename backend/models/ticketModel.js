import mongoose from "mongoose";
const headSchema = mongoose.Schema({
  name: { type: String },
});

const bodySchema = mongoose.Schema({
  name: { type: String },
});

const ticketSchema = mongoose.Schema(
  {
    heading: {
      type: Array,
    },
    body: { type: Array },
    heading2: {
      type: Array,
    },
    body2: {
      type: Array,
    },
    isDeleted:{
      type:Boolean,
      default:false
    }
  },

  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
