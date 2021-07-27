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
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isSelected: {
      type: Array,
    },

    isSelectedticket:{
      type:Boolean,
      default:true
    },
    

    // istemplateDeleted: {
    //   type: Boolean,
    //   default: false,
    // },
    
  
    // user:{
    //   ref:'User',
    //   type: mongoose.Schema.Types.ObjectId
    //   },

      Createdby:{type:String}

  
  },

 
  {
    timestamps: true,
  },
  {strict:false}

  
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
