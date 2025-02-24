import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from "react-bootstrap";

import { FaShoppingCart } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { useState } from 'react';



import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';


import { useContext } from 'react';
import { myLoginContext } from '../redux/loginContext';




const Topmanu=()=>{
const{isLogedIn, setIsLogedIn}=useContext(myLoginContext)
const [showDropdown, setShowDropdown] = useState(false);

 const mycart= useSelector(state=>state.myCart.cart);
  const navigate= useNavigate();


//logout
const logout=()=>{
  localStorage.clear();
  setIsLogedIn(false);
  navigate("/")
}

 const cartPage=()=>{
    navigate("/cart");
   }



 
  const cartLen= mycart.length;
    return(
        <>
        <div id="nav">
        <marquee style={{behavior:"scroll"}} >
        <p>Extra 5% Off + Free Shipping on Prepaid Orders Shop All || 
              Check our new app for a seamless experience Download
            || Unveil Elegance: Discover our all new collections Shop All</p>
        </marquee>
    </div>
    <div id="navbar">
    <Navbar  data-bs-theme="dark">
        <Container>
       
          <Navbar.Brand href="#home" style={{alignItems:"center", marginBottom:"30px", fontSize:"24px", color:"white",position: "relative", right:"50px"}}>THE LUXE CORNER</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="gift"> Gift Atelier </Nav.Link>
          <Nav.Link as={Link} to="decor">Decor </Nav.Link>
            <Nav.Link as={Link} to="kitchen"> Kitchen & Dining</Nav.Link>
            <Nav.Link as={Link} to="lighting"> Lighting </Nav.Link>
            <Nav.Link as={Link} to="wall"> Wall Decor</Nav.Link>
            <Nav.Link as= {Link} to="bath"> Bath Decor </Nav.Link>
            <Nav.Link as={Link} to="furniture"> Furniture </Nav.Link>
            
            <button onClick={()=>{navigate("/gift")}}>Get App</button>

           <div id='icons' style={{marginLeft:"30px"}}>
            <div><IoIosEye /><p style={{fontSize:"10px"}}>Viewed</p></div>

            <div>
    {cartLen > 0 && ( <span style={{ fontSize: "14px" }}>{cartLen}</span> )}
    <a href="#" onClick={cartPage}>
        <FaShoppingCart style={{ color: "white" }} /> </a>
    <p style={{ fontSize: "10px", marginLeft: "5px" }}>cart</p>
            </div>

            <div>  
             
            {/* DROPDOWN */}
            <Dropdown show={showDropdown} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              <Nav.Link className="d-flex align-items-center " onClick={() => setShowDropdown(!showDropdown)}>
                <GrUserAdmin size={22} className="cursor-pointer mt-1 " style={{color:"white"}} />
              </Nav.Link>
              <Dropdown.Menu>
          {isLogedIn?(<>
            <Dropdown.Item as={Link} to="/loginsystem">
                 Welcome {localStorage.getItem("username")}!
                </Dropdown.Item>
                <Dropdown.Item  onClick={logout}>
                 Logout!
                </Dropdown.Item>
           </>) : (<> 
            <Dropdown.Item as={Link} to="/loginsystem">Login</Dropdown.Item>
              <Dropdown.Item as={Link} to="/loginsystem">Signup</Dropdown.Item>
          
               
          
          </>)}     
             

                  </Dropdown.Menu>
            </Dropdown>
            <p style={{fontSize:"10px"}}>Account</p></div>

            <div><a href='#' onClick={()=>{  navigate("/search")}}><FaSearch  style={{color:"white"}}/></a>
            <p style={{fontSize:"10px"}}>Search</p></div>

       
            {/* <div><a href='#' onClick={()=>{  navigate("/gift")}}><img src={logout1} width={20} height={20}/> </a>
            <p style={{fontSize:"10px"}}> {localStorage.getItem("username")} </p>
            </div> */}
         </div>
         
      
          </Nav>
        </Container>
      </Navbar>
</div>
   </>
    )
}
export default Topmanu;