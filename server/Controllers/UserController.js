const UserModel = require("../Models/UserModel");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken");

const  Signup= async (req, res) => {
        const { name, email, password, address, contact, pincode, city, state } = req.body;
          try {
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return res.status(400).send({ msg: "User already exists! Please log in." });
            }

        
            const hashedPassword = await bcrypt.hash(password, 8);

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

    const Login = async (req, res) => {
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
           // JWT Token
            const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, { expiresIn: "7d" });
    
            // ✅ Updated response including user details
            return res.status(200).send({
                msg: "Login Successful",
                token: token,
                user: { _id: user._id, name: user.name, email: user.email }
            });
    
        } catch (error) {
            console.error("Error:", error.message);
            return res.status(500).send({ msg: "Server Error" });
        }
    };
    

// const Profile=async(req, res)=>{
//     const token = req.header("Authorization")
//     try {
//       const decoded = jwt.verify(token.replace("Bearer",""), process.env.TOKEN_KEY);
//        console.log(decoded);
//         const User= await UserModel.findById(decoded.id);
//         console.log(User);
//         res.status(200).send(User);
//     } catch (error) {
//         console.log(error)
//     }
// }

const Profile = async (req, res) => {
    try {
        const token = req.header("Authorization")?.split(" ")[1];
        console.log("Received Token:", token); // Debugging
       if (!token) {
            return res.status(401).json({ msg: "Unauthorized! Token is missing." });
        }
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        console.log("Decoded Token:", decoded);
        
       const user = await UserModel.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ msg: "User Not Found" });
        }

        console.log("User Found:", user);
        res.status(200).json({ user });  // Ensure response is correct
    } catch (error) {
        console.error("Profile Error:", error);
        return res.status(401).json({ msg: "Invalid Token" });
    }
};







const getUserShow=async(req, res)=>{
    //console.log(req.body)
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
        getUserShow,
      
    }





