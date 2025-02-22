// import React, { useState } from 'react';
// import axios from "axios";
// import "../CSS/LoginSystem.css";

// const LogSystem = () => {
//     const [isSignUp, setIsSignUp] = useState(false);
//     const[userType, setUsertype]=useState("")
//     const [input, setInput] = useState({
//         name: '',
//         email: '',
//         password: '',
//         address: '',
//         contact: '',
//         pincode: '',
//         city: '',
//         state: ''
//     });

//     const toggleAuthMode = () => {
//         setIsSignUp(!isSignUp);
//         setInput({
//             name: '', email: '', password: '', address: '', contact: '', pincode: '', city: '', state: ''
//         });
//     };

//     const handleInput = (e) => {
//         let name = e.target.name;
//         let value = e.target.value;
//         setInput(values => ({ ...values, [name]: value }));
//     };

//     const handleSubmit = async () => {
//         try {
//             const api = "http://localhost:8060/admin/signinuser";
//             const response = await axios.post(api, input);
//               console.log(response.data);
//             if (isSignUp) {
//                 alert("Sign Up Successful!");
//             } else {
//                 alert("Login Successful!");
//                 window.location.href = "/dashboard";
//             }
//         } catch (error) {
//             console.error(error.response?.data?.msg || "An error occurred");
//             alert(error.response?.data?.msg || "Something went wrong");
//         }
//     };

//     return (
//         <center>
//             <div className="auth-card">
//                 <h2 style={{ color: "gray" }}>{isSignUp ? 'Sign Up' : 'Login'}</h2>
//                 {isSignUp && (
//                     <>
//                         <input type="text" name="name" placeholder="Name" value={input.name} onChange={handleInput} required />
//                         <input type="text" name="address" placeholder="Address" value={input.address} onChange={handleInput} required />
//                         <input type="text" name="contact" placeholder="Contact" value={input.contact} onChange={handleInput} required />
//                         <input type="text" name="pincode" placeholder="Pincode" value={input.pincode} onChange={handleInput} required />
//                         <input type="text" name="city" placeholder="City" value={input.city} onChange={handleInput} required />
//                         <input type="text" name="state" placeholder="State" value={input.state} onChange={handleInput} required />
//                     </>
//                 )}
//                 <input type="email" name="email" placeholder="Email" value={input.email} onChange={handleInput} required />
//                 <input type="password" name="password" placeholder="Password" value={input.password} onChange={handleInput} required />
//                 <select  required name="empType" value={userType} onChange={(e)=>{setUsertype(e.target.value)}}>
//                 <option value="" disabled> Login as </option>
//                 <option value="admin">Admin</option>
//                 <option value="employee">Employee</option>
//                  </select>
//                 <button className="auth-btn" onClick={handleSubmit}>{isSignUp ? 'Sign Up' : 'Login'}</button>
//                 <p className="auth-toggle">
//                     {isSignUp ? 'Already have an account?' : "Don't have an account?"} 
//                     <span onClick={toggleAuthMode}>{isSignUp ? 'Login' : 'Sign Up'}</span>
//                 </p>
//             </div>
//         </center>
//     );
// };

// export default LogSystem;
import { GoPackage } from "react-icons/go";
import { BiCheckShield } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";

import img from "../images/img.jpg"

import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../css/LoginSystem.css";




const LogSystem = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [userType, setUserType] = useState("");
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        contact: '',
        pincode: '',
        city: '',
        state: ''
    });

    const toggleAuthMode = () => {
        setIsSignUp(!isSignUp);
        setInput({
            name: '', email: '', password: '', address: '', contact: '', pincode: '', city: '', state: ''
        });
        setUserType("");  
    };

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            if (userType === "admin") {
             let   api = "http://localhost:8060/admin/adminlogin";
                const response= await axios.post(api,{ email: input.email, password: input.password})
                console.log(response.data)
                alert("Admin Successfully Login!!")
                navigate("/dashborad")

            } else if (userType === "user") {
                if (isSignUp) {
                 let   api = "http://localhost:8060/user/signup";
                 const response= await axios.post(api, input)
                 console.log(response.data)
                 alert(response.data.msg)
                 setInput({name: '',
                    email: '',
                    password: '',
                    address: '',
                    contact: '',
                    pincode: '',
                    city: '',
                    state: ''})
                
                    setIsSignUp(false)
                } else {
                  let  api = "http://localhost:8060/user/login";
                  const response= await axios.post(api,{ email: input.email, password: input.password})
                  console.log(response.data)
                  localStorage.setItem("token" , response.data.token)
                  alert("Login Successfully!!")
                  navigate("/contact")
                  
                }
            } else {
                alert(response.data.msg)
                return;
            }

        } catch (error) {
            alert(error.response.data.msg)
        }
    };

    return (
    <>
 
        <div >
        <center>
            <div className="auth-card">
                <h2 style={{ color: "gray" }}>{isSignUp ? 'Sign Up' : 'Login'}</h2>

                {isSignUp && (
                    <>
                        <input type="text" name="name" placeholder="Name" value={input.name} onChange={handleInput} required />
                        <input type="text" name="address" placeholder="Address" value={input.address} onChange={handleInput} required />
                        <input type="text" name="contact" placeholder="Contact" value={input.contact} onChange={handleInput} required />
                        <input type="text" name="pincode" placeholder="Pincode" value={input.pincode} onChange={handleInput} required />
                        <input type="text" name="city" placeholder="City" value={input.city} onChange={handleInput} required />
                        <input type="text" name="state" placeholder="State" value={input.state} onChange={handleInput} required />
                    </>
                )}

                <input type="email" name="email" placeholder="Email" value={input.email} onChange={handleInput} required />
                <input type="password" name="password" placeholder="Password" value={input.password} onChange={handleInput} required />

                <select required name="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
                    <option value="" disabled> Login as </option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>

                <button className="auth-btn" onClick={handleSubmit}>{isSignUp ? 'Sign Up' : 'Login'}</button>

                <p className="auth-toggle">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"} 
                    <span onClick={toggleAuthMode}>{isSignUp ? 'Login' : 'Sign Up'}</span>
                </p>
            </div>
        </center>
        </div>
            <div style={{fontFamily:"time",textAlign:"center",display:"flex",gap:"20px", marginTop:"50px",marginLeft:"80px"}}>          
          <div style={{height:"150px", width:"400px"}}>
            <GoPackage fontSize={24} />
            <h6>SECURE PACKAGING</h6>
            <p>A skilled packaging department & heavy duty packaging ensures utmost safety for even the most delicate products.</p>
            </div>
            <div style={{height:"150px", width:"400px"}}>
        <BiCheckShield fontSize={25} />
          <h6>QUALITY GUARANTEE</h6>
          <p>We rigorously test every product to ensure it meets or exceeds our patrons expectations. If it doesn't, we won't sell it.</p>
        </div>
        
        <div style={{height:"150px", width:"400px"}}>
          <IoMailOutline  fontSize={24}/>
        <h6>CUSTOMER SERVICE</h6>
        <p>Award winning customer service - we are here to serve you. Get in touch!</p>
        </div>
        </div>
        
        <div>
              <img src={img} style={{width:"100%" ,marginTop:"100px"}}/>
            </div>
          
          
        </>
    );
};

export default LogSystem;
