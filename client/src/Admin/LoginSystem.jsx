import React, { useState } from 'react';
import axios from "axios"
import "../CSS/LoginSystem.css"
// import bn1 from "../vedio/bn1.webp"


const LogSystem=()=> {
    const [isSignUp, setIsSignUp] = useState(false);
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    });


    const toggleAuthMode = () => {
        setIsSignUp(!isSignUp);
        setInput({ name: '', email: '', password: '' });
    };

    const handleInput = (e) => {
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values , [name]:value}))
    };

    
    const handleSubmit = async () => {
        try {
            const api = "http://localhost:8060/admin/loginsystem"; // Same URL for both
            const response = await axios.post(api, input); // Sending `name`, `email`, `password`
            
            console.log(response.data);
    
            // Success message
            if (isSignUp) {
                localStorage.setItem("username" , response.data.name)
                localStorage.setItem("useremail", response.data.email)
                localStorage.setItem("userid" , response.data._id)

                alert("Sign Up Successful!");
                
            } else {
                alert("Login Successful!");
                window.location.href = "/dashborad"; 
            }
    
         
        } catch (error) {
            console.error(error.response?.data?.msg || "An error occurred");
            alert(error.response?.data?.msg || "Something went wrong");
        }
    };

    // const backgroundStyle = {
    //     backgroundImage: `url(${bn1})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     height: '500px',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     color: 'white',
    //     textAlign: 'center',
        
    //   };



    return (
        <>
         {/* <div style={backgroundStyle}> */}
       <center>
            <div className="auth-card">
                <h2 style={{color:"gray"}}>{isSignUp ? 'Sign Up' : 'Login'}</h2>
               
        {isSignUp && ( <input type="text" name="name" placeholder="Name" value={input.name} onChange={handleInput} required /> )}
     <input type="email" name="email" placeholder="Email" value={input.email}  onChange={handleInput} required />
    <input type="password" name="password" placeholder="Password" value={input.password} onChange={handleInput} required/>
         <button  className="auth-btn" onClick={handleSubmit}>{isSignUp ? 'Sign Up' : 'Login'}</button>
              
     <p className="auth-toggle">{isSignUp ? 'Already have an account?' : "Don't have an account?"} 
                <span onClick={toggleAuthMode}>
                        {isSignUp ? 'Login' : 'Sign Up'}
                    </span>
                </p>
            </div>
            </center>
           
       
      
        </>
    );
}

export default LogSystem;