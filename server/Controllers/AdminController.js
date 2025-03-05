const AdminModel=require("../Models/AdminModels")
const ProductModel=require("../Models/ProductModel")
const UserModel=require("../Models/UserModel")
const CustomerModel=require("../Models/CustomerModel")
const mongoose = require("mongoose");

const LoginSystem=async(req , res)=>{
    console.log(req.body)
 const {userid , password}=req.body
   try {
    const Admin= await AdminModel.findOne({userid:userid})
    if(!Admin)
    {
        res.status(400).json({msg:"Invalid User ID"})
    }
   else if(Admin.password!=password)
    {
        res.status(400).json({msg:"Invalid Password"}) 
    }
    else{
        res.status(200).json(Admin)
    }
    

} catch (error) {
    console.log(error)
}
   
}

/////////*************************ProductSave*********************************************** */

const ProductSave=async(req, res)=>{
    const imageUrls = req.files.map(file => file.path);
   const  { price, description, category,subcategory, product, material,dimensions,pack}=req.body
   try {
    const Items= await ProductModel.create({
        product:product,
        price:price, 
        description:description, 
        category:category, 
        subcategory:subcategory,
        images:imageUrls,
        defaultImage:imageUrls[0],
        material: material,
        pack:pack,
        dimensions:dimensions,
        
    })
    res.status(200).send("Items Succesfull Update")
   } catch (error) {
    console.log(error)
   }
}

const ProductDisplay=async(req,res)=>{
    try {
       const Product= await ProductModel.find();
       res.status(200).send(Product) 
    } catch (error) {
        console.log(error)
    }
}

const ProductMakePrimary=async(req,res)=>{
    try {
        const Items=await ProductModel.findByIdAndUpdate(id , {status:"primary"})
        res.status(201).send({msg:"Product Status succesfully Changes!!! "})
    } catch (error) {
       console.log(error) 
    }
}

const ProductNormal=async(req , res)=>{
    const{id}=req.body
    try {
        const Items=await ProductModel.findByIdAndUpdate(id , {status:"normal"})
        res.status(201).send({msg:"Product Status succesfully Changes!!! "})
    } catch (error) {
       console.log(error) 
    } 
}

const CustomerOrder=async(req, res)=>{
const Customer= await CustomerModel.find()
res.send(Customer)

}


const displayAllCustomer=async(req, res)=>{
    const Customer= await UserModel.find();
    res.status(200).send(Customer);
}

const DeleteProduct=async(req, res)=>{
    const{id}=req.body
    try {
        const Product= await ProductModel.findByIdAndDelete(id)
        res.send("ok")
    } catch (error) {
        console.log(error)    }
    
}

const EditDisplay=async(req,res)=>{
   const {id}=req.body
   try {
    const Product= await ProductModel.findById(id)
    res.send(Product)
} catch (error) {
    console.log(error)    }

}

const EditproductSave=async(req,res)=>{
  const  {_id, product, price, description, category,subcategory, material, pack, dimensions, images, defaultImage, ratings, status}=req.body
 try {
    const mydata= await ProductModel.findByIdAndUpdate(_id ,
        {   product,
            price, 
            description, 
            category, 
            subcategory,
            material,
            pack,
            dimensions,
            images,
            defaultImage,
            ratings,
            status,
        }) 
        res.send("ok")
 } catch (error) {
    console.log(error)
 }
}

  


module.exports={
    LoginSystem,
    ProductSave,
    ProductDisplay,
    ProductMakePrimary,
    ProductNormal,
    CustomerOrder,
    displayAllCustomer,
    DeleteProduct,
    EditDisplay,
    EditproductSave

}