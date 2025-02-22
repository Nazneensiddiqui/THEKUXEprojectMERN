const mongoose=require("mongoose")
const CustomerSchema= new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    city:String,
    contact:Number,
    state:String,
    myProImg:String,
    myProList:String
   })