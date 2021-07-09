import mongoose from "mongoose";
// const ticketSchema = mongoose.Schema({
//   ,
  
// });



const templateSchema = mongoose.Schema(
{
   
  // tickets:[
  //   {_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }}
  // ]

  },

  {
    timestamps: true,
  }
);

const Template = mongoose.model("Template", templateSchema);

export default Template;
