import { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../config';

import { GoPackage } from "react-icons/go";
import { BiCheckShield } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";

import Carousel from 'react-bootstrap/Carousel';
import b1 from "../images/img7.jpg"
import b2 from "../images/img9.jpg"
import b3 from "../images/img8.jpg"
import a1 from "../images/a1.webp"
import a2 from "../images/a2.webp"
import a3 from "../images/a3.webp"
import a4 from "../images/a4.webp"
import a5 from "../images/a5.webp"
import img from "../images/img.jpg"
import img1 from "../images/img1.jpg"


import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

import { useNavigate } from 'react-router-dom';

const Decor=()=>{

  const dispatch= useDispatch();
  const navigate=useNavigate()

  //data ko get karne ke liye
const[Mydata , setMydata]=useState([])
const loadData=()=>{
    const api=`${BASE_URL}/product/homeproductdisplay`;
  axios.get(api).then((res)=>{
    setMydata(res.data)
  })
}
useEffect(()=>{
  loadData()
},[])


 const Pro_Detail=(id)=>{
navigate(`/prodect/${id}`)
 }


const ans=Mydata.map((key)=>{
  return(
   <>

  <div>
   <Card style={{width:"230px", marginTop:"20px"}}>
      {/* Image Section with Overlay */}
          <div className="card">
            <a href='#' onClick={()=>{Pro_Detail(key.id)}}>
            <img src={`${BASE_URL}/${key.defaultImage}`} style={{ height: "240px", width: "100%"  }} alt={key.description} /></a>
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
        <div style={{marginTop:"20px"}}>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img src={b1} />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={b2} />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b3} />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            ,msdfg;'q*-/*'
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
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
      <img src={img1} style={{width:"100%", height:"500px"}}/>
    </div>
    <h5 align="center"  style={{fontFamily:"time",marginTop:"50px"}}>ALL DECOR</h5>
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
export default Decor;