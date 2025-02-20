const AdminModel=require("../Models/AdminModels")

const LoginSystem=async(req , res)=>{
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
    console.log(req.body)
    const imageUrls = req.files.map(file => file.path);
   const  { price, description, category,subcategory, product}=req.body
   try {
    const Items= await ProductModel.create({
        product:product,
        price:price, 
        description:description, 
        category:category, 
        subcategory:subcategory,
        images:imageUrls,
        defaultImage:imageUrls[0]
        
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
    const{id}=req.body
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

module.exports={
    LoginSystem,
    ProductSave,
    ProductDisplay,
    ProductMakePrimary,
    ProductNormal

}