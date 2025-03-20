const mongoose=require("mongoose")
const CustomerSchema= new mongoose.Schema({
    name:String,
    product:String,
    email:String,
    address:String,
    city:String,
    contact:Number,
    state:String,
    amount:Number,
    myProImg:String,
    createdAt: {
        type: Date,
        default: Date.now, 
      },
   })
   module.exports=mongoose.model("customer" , CustomerSchema)

   