const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:String,
    contact:Number,
    email:String,
    city:String,
    add:String,
    state:String,
    amount:Number,
    paymethod:String
    
})
module.exports=mongoose.model("user" , userSchema)