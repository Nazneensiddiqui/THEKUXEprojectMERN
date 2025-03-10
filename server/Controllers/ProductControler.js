const ProductModel= require("../Models/ProductModel");
const UserModel=require("../Models/UserModel")
const productDisplay=async(req, res)=>{
    try {
         const Product = await ProductModel.find({category:"Decor"});
         res.status(200).send(Product);
    } catch (error) {
        console.log(error);
    }
}



const CustomerData=async(req,res)=>{
  const {email,name,address,phoneno,city,state,amount,paymethod}=req.body
 try {
    const mydata=await UserModel.create({
    name:name,
    contact:phoneno,
    email:email,
    city:city,
    add:address,
    state:state,
    amount:amount,
    paymethod:paymethod
    })
    res.status(200).send("Data successfully Save!!")
  } catch (error) {
    console.log(error)
  }
}

const ProductDetail=async(req , res)=>{
 const {id}= req.body
  try {
    const Product= await ProductModel.findById(id)
    console.log(Product)
    res.send(Product)
  } catch (error) {
    console.log(error)
  }
}

 const Kitchendisplay=async(req,res)=>{
  try {
    const Product = await ProductModel.find({category:"Kitchen & Dining"});
 
    res.status(200).send(Product);
} catch (error) {
   console.log(error);
}
}

const LightProduct=async(req, res)=>{

  try {
    const Product = await ProductModel.find({category:"Lighting"});
 
    res.status(200).send(Product);
} catch (error) {
   console.log(error);
}
}

const WallProduct=async(req,res)=>{
  try {
    const Product = await ProductModel.find({category:"Wall Decor"});
 res.status(200).send(Product);
} catch (error) {
   console.log(error);
}
}

const BathProduct=async(req,res)=>{
  try {
    const Product = await ProductModel.find({category:"Bath Decor"});
 res.status(200).send(Product);
} catch (error) {
   console.log(error);
   }
}

const FurnitureProduct=async(req,res)=>{
  // console.log(req.body)
  try {
    const Product = await ProductModel.find({category:"Furniture"});
 res.status(200).send(Product);
} catch (error) {
   console.log(error);
   }
}





module.exports={
    productDisplay,
    CustomerData,
    ProductDetail,
    Kitchendisplay,
    LightProduct,
    WallProduct,
    BathProduct,
    FurnitureProduct
}