const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address:{ type: String, required: true },
    contact:{ type: Number, required: true },
    pincode:{ type: Number, required: true },
    city:{ type: String, required: true },
    state:{ type: String, required: true },
})
module.exports=mongoose.model("user" , UserSchema)

