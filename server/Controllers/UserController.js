const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");

const  Signup= async (req, res) => {
        const { name, email, password, address, contact, pincode, city, state } = req.body;
        
        try {
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return res.status(400).send({ msg: "User already exists! Please log in." });
            }

            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = await UserModel.create({
                name,
                email,
                password: hashedPassword,
                address,
                contact,
                pincode,
                city,
                state,
            });

            return res.status(201).send({ msg: "Sign Up Successful!", user: newUser });
        } catch (error) {
            console.error("Error:", error.message);
            return res.status(500).send({ msg: "Server Error" });
        }
    }

   const Login= async (req, res) => {
        const { email, password } = req.body;
        
        try {
            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(400).send({ msg: "Invalid Email" });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).send({ msg: "Invalid Password" });
            }

            //jwt token
const token= await jwt.sign({id: user._id }, process.env.TOKEN_KEY, {expiresIn:`7 days`});
            return res.status(200).send({token:token});
        } catch (error) {
            console.error("Error:", error.message);
            return res.status(500).send({ msg: "Server Error" });
        }
    }

const Profile=async(req, res)=>{
    const token = req.header("Authorization")
    try {
      const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.TOKEN_KEY);
        console.log(decoded);
        const User= await UserModel.findById(decoded.id);
        console.log(User);
        res.status(200).send(User);
    } catch (error) {
        console.log(error)
    }
}

const getUserShow=async(req, res)=>{
   const{id}=req.body
   try {
    const User= await UserModel.findById(id)
    res.status(200).send(User)
   } catch (error) {
    console.log(error)
   }
   
}




    module.exports={
        Signup,
        Login,
        Profile,
        getUserShow
    }
