const AdminModel = require("../Models/AdminModels");
const ProductModel=require("../Models/ProductModel")
const bcrypt = require("bcrypt");

const LoginSystem = async (req, res) => {
    //console.log(req .body)
    const { name, email, password } = req.body;

    try {
        if (name) {
            // SignUp Logic
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt); // Password hashing
            const existingUser = await AdminModel.findOne({ email });

            if (existingUser) {
                return res.status(400).send({ msg: "User already exists! Please log in." });
            }

            const newUser = await AdminModel.create({
                name:name,
                email:email,
                password: hashedPassword,
            });

            return res.status(201).send({ msg: "Sign Up Successful!", user: newUser });
        } else {
            // Login Logic
            const user = await AdminModel.findOne({ email });

            if (!user) {
                return res.status(400).send({ msg: "Invalid Email" });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).send({ msg: "Invalid Password" });
            }

            return res.status(200).send({ msg: "Login Successful!", user });
        }
    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).send({ msg: "Server Error" });
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