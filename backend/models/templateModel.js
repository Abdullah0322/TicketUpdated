import mongoose from "mongoose";
// const ticketSchema = mongoose.Schema({
//   ,
  
// });



const templateSchema = mongoose.Schema(
{
   
  // tickets:[
  //   {_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }}
  // ]
  // user:{
  //   ref:'User',
  //   type: mongoose.Schema.Types.ObjectId
  //   },
      Createdby:{type:String}

  },

  {
    timestamps: true,
  }
);

const Template = mongoose.model("Template", templateSchema);

export default Template;
