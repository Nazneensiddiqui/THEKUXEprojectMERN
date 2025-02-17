const mongoose= require("mongoose");
const productSchema=new mongoose.Schema({   
    product:String,
    price:Number, 
    description:String, 
    category:String, 
    subcategory:String,
    images:[String],
    defaultImage:String,
    ratings:{ type: Number, default:0},
    status:{ type: String, default:'normal'},
})

module.exports = mongoose.model("product", productSchema);