const ProductModel= require("../Models/ProductModel");

const productDisplay=async(req, res)=>{
    try {
         const Product = await ProductModel.find();
         res.status(200).send(Product);
    } catch (error) {
        console.log(error);
    }
}

const UserModel=require("../Models/UserModel")

const CustomerData=async(req,res)=>{
    console.log(req.body)
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
 const { id }= req.body
  try {
    const Product= await ProductModel.findOne({id:id})
    res.send(Product)
  } catch (error) {
    console.log(error)
  }
}


module.exports={
    productDisplay,
    CustomerData,
    ProductDetail
}