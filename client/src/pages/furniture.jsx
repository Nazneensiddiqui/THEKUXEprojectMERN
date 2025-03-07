import { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../config';

import { GoPackage } from "react-icons/go";
import { BiCheckShield } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";

import furn from "../images/furn.webp"
import a1 from "../images/a1.webp"
import a2 from "../images/a2.webp"
import a3 from "../images/a3.webp"
import a4 from "../images/a4.webp"
import a5 from "../images/a5.webp"
import img from "../images/img.jpg"
import img8 from "../images/img8.jpg"


import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

import { useNavigate } from 'react-router-dom';

const Furniture=()=>{

  const [mydata, setMydata]= useState([]);
  const dispatch= useDispatch();
  const navigate=useNavigate()

  //data ko get karne ke liye

  const loadData=()=>{
    let api=`${BASE_URL}/product/furniture`;
    axios.post(api).then((res)=>{
        setMydata(res.data)
    })
  }
useEffect(()=>{
  loadData()
},[])

const Pro_Detail=(id)=>{
  alert(id)
navigate(`/productdetail/${id}`)
 }

const ans=mydata.map((key)=>{
  return(
   <>
<div>
   <Card style={{width:"230px", marginTop:"20px"}}>
      {/* Image Section with Overlay */}
          <div className="card">
            <a href='#' onClick={()=>{Pro_Detail(key._id)}}>
            <img src={`${BASE_URL}/${key.defaultImage}`} alt={key.description} style={{ height: "240px", width: "100%"  }}/></a>
            <div className="overlay"  
            onClick={()=>{dispatch(addToCart({id:key._id, name:key.name, brand:key.brand, price:key.price, description:key.description, category:key.category, subcategory:key.subcategory, images:key.images, defaultImage:key.defaultImage, ratings:key.ratings, status:key.status, qnty:1}))}}>+Add to Cart</div>
          </div>
 <Card.Body>
       <Card.Text style={{fontFamily:"Times New Roman', Times, serif", fontSize:"12px"}}>
           {key.description} 
           <br/>
           <span > ₹ {key.price}/-</span>  
       </Card.Text>
       {/* <Button variant="primary" 
         onClick={()=>{cartDataAdd(key.id, key.price, key.description, key.image)}} >add to cart</Button> */}
     </Card.Body>
   </Card>
   </div>
</>
  )

})



    return(
        <>
      <div style={{marginTop:"50px"}}>
        <img src={furn} width={1350} height={400}/>
    </div>
    <div id="img">
            <div>
            <img src={a1} width={320} height={420}/><br/><br/>
            <img src={a4} width={320} height={300} />
            </div>
            <div style={{marginTop:"10px"}}>
            <img src={a2} width={290} height={350} /><br/>
            <img src={a5} width={290} height={380} style={{marginTop:"20px"}}/>
            </div>
            <div style={{marginBottom:"140px"}}>
                <img src={a3} width={320} height={420}  /><br/><br/>
 <span style={{textAlign:"center", marginLeft:"50px",fontFamily:"time", marginTop:"100px"}}><h2>Magical Illumination</h2>
    <p>Create the perfect ambiance with<br/> lighting that adds warmth and style<br/> to every room</p></span> 
  </div>
  </div> 
    <div style={{marginTop:"50px"}}>
      <img src={img8} style={{width:"100%", height:"500px"}}/>
    </div>
    <h5 align="center"  style={{fontFamily:"time",marginTop:"50px"}}>All FURNITURE</h5>
    <div id='cardData'>
  {ans}
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
    )
}
export default Furniture;




