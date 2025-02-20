import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowRight } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { BiCheckShield } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";


import { useNavigate } from "react-router-dom";

import git from "../images/git.webp"
import de1 from "../images/de1.webp"
import de2 from "../images/de2.webp"
import de3 from "../images/de3.webp"
import de4 from "../images/de4.webp"
import de5 from "../images/de5.webp"
import de6 from "../images/de6.webp"
import de7 from "../images/de7.webp"
import de8 from "../images/de8.webp"
import de9 from "../images/de9.webp"
import de10 from "../images/de10.webp"
import cd1 from "../images/cd1.webp"
import cd2 from "../images/cd2.webp"
import cd3 from "../images/cd3.webp"
import cd4 from "../images/cd4.webp"
import cd5 from "../images/cd5.webp"
import cd6 from "../images/cd6.webp"
import cd7 from "../images/cd7.webp"

import mk1 from "../images/mk1.webp"
import mk2 from "../images/mk2.webp"
import mk3 from "../images/mk3.webp"
import mk4 from "../images/mk4.webp"
import mk5 from "../images/mk5.webp"
import mk7 from "../images/mk7.webp"
import mk8 from "../images/mk8.webp"
import mk9 from "../images/mk9.webp"
import mk10 from "../images/mk10.webp"
import hv1 from "../images/hv1.webp"
import hv2 from "../images/hv2.webp"
import p1 from "../images/p1.webp"
import p2 from "../images/p2.webp"
import lm1 from "../images/lm1.webp"
import lm2 from "../images/lm2.jpg"
import lm3 from "../images/lm3.webp"
import lm4 from "../images/lm4.webp"
import lm5 from "../images/lm5.webp"
import lm6 from "../images/lm6.webp"
import lm7 from "../images/lm7.webp"
import lm8 from "../images/lm8.webp"
import img from "../images/img.jpg"
import { useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config"


const Gift=()=>{
  const navigate=useNavigate();

  const getProfile=async()=>{
try {
  const token=localStorage.getItem("token")
  const response=await axios.get(`${BASE_URL}/user/profile`,{headers:{Authorization:`Bearer ${token}`}})
  console.log(response.data);
  localStorage.setItem("userid", response.data._id);
  localStorage.setItem("username", response.data.name);
  //setIsLogedIn(true); 
} catch (error) {
  console.log(error)
}
  }
   

useEffect(()=>{
  if (localStorage.getItem("token"))
  {
    getProfile();
  }

}, [])
  

 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // 5 images will be shown at a time
        slidesToScroll: 1, // 1 image will move at a time
        autoplay: true, // Auto slide
        autoplaySpeed: 2000, // Time between each slide
      }

      const shop=()=>{
        navigate("/shopNow")
      }
    

    return(
        <>
        <div style={{marginTop:"50px", }}>
            <img src={git} style={{maxWidth:"100%", height:"auto"}}/>
        </div>
        <div align="center" style={{marginTop:"50px", fontFamily:"time"}}> 
        <h1>Shop by Personality</h1>
        <p>We have something special for everyone</p></div>


        <div style={{marginTop:"50px"}}>
      <Slider {...settings}>
        <div><img src={de1} alt="Image 1" className="img-thumbnail" /></div>
        <div><img src={de2} alt="Image 2" className="img-thumbnail" /></div>
        <div><img src={de3} alt="Image 3" className="img-thumbnail" /></div>
        <div><img src={de4} alt="Image 4" className="img-thumbnail" /></div>
        <div><img src={de5} alt="Image 5" className="img-thumbnail" /></div>
        <div><img src={de6} alt="Image 6" className="img-thumbnail" /></div>
        <div><img src={de7} alt="Image 7" className="img-thumbnail" /></div>
        <div><img src={de8} alt="Image 8" className="img-thumbnail" /></div>
        <div><img src={de9} alt="Image 9" className="img-thumbnail" /></div>
        <div><img src={de10} alt="Image 10" className="img-thumbnail" /></div>
      </Slider>
    </div>

    <div align="center" style={{marginTop:"50px", fontFamily:"time"}}> 
        <h1>Shop by Category</h1>
       </div>
       <div style={{marginTop:"50px"}}>
       <Slider {...settings}>
        <div><img src={cd1} alt="Image 1" className="img-thumbnail" /></div>
        <div><img src={cd2} alt="Image 2" className="img-thumbnail" /></div>
        <div><img src={cd3} alt="Image 3" className="img-thumbnail" /></div>
        <div><img src={cd4} alt="Image 4" className="img-thumbnail" /></div>
        <div><img src={cd5} alt="Image 5" className="img-thumbnail" /></div>
        <div><img src={cd6} alt="Image 6" className="img-thumbnail" /></div>
        <div><img src={cd7} alt="Image 7" className="img-thumbnail" /></div>
      
      </Slider>
    </div>
    <div align="center" style={{marginTop:"50px", fontFamily:"time"}}> 
        <h1>Make her day</h1>
        <p>With the perfect gift.</p></div>

        <div style={{marginTop:"50px"}}>
      <Slider {...settings}>
        <div><img src={mk1} alt="Image 1" className="img-thumbnail" /></div>
        <div><img src={mk2} alt="Image 2" className="img-thumbnail" /></div>
        <div><img src={mk3} alt="Image 3" className="img-thumbnail" /></div>
        <div><img src={mk4} alt="Image 4" className="img-thumbnail" /></div>
        <div><img src={mk5} alt="Image 5" className="img-thumbnail" /></div>
        </Slider>
    </div>
    <div align="center" style={{marginTop:"50px", fontFamily:"time", width:"100%", height:"auto", flexWrap:"wrap"}} onClick={()=>{navigate("/decore")}}> 
        <h1>Make him feel special</h1>
        <p>With the perfect gift.</p></div>
        <div style={{display:"flex", gap:"5px"}}>
        <img src={hv1} width={450} height={500}/>
        <img src={hv2} width={450} height={500} />
        <div style={{backgroundColor:"lightgray", height:"500px",width:"450px",fontFamily:"time"}}>
            <p style={{paddingLeft:"150px",paddingTop:"60px", }}>
                Clcok <FaArrowRight /><br/><br/>
                Bookends <FaArrowRight /><br/><br/>
                Decorative Plates <FaArrowRight /><br/><br/>
                Bar Accessories <FaArrowRight /><br/><br/>
                Drinking Glasses <FaArrowRight /><br/><br/>
                Wall Plates Accents <FaArrowRight /><br/><br/>
                Faux Flower Arrangements <FaArrowRight /><br/><br/>
                 </p>
             </div>
        </div>
        <div align="center" style={{marginTop:"50px", fontFamily:"time"}}> 
        <h1>Shop by Price</h1>
       </div>
    
      
        <div style={{margin:"40px", display:"flex",gap:"20px", flexWrap:"wrap"}}>
          <img src={mk7} alt="Image 1" className="img-thumbnail" width={300} height={300} />
        <img src={mk8} alt="Image 2" className="img-thumbnail" width={300} height={300}/>
        <img src={mk9} alt="Image 3" className="img-thumbnail" width={300} height={300}/>
        <img src={mk10} alt="Image 4" className="img-thumbnail" width={300} height={300}/>
        </div>

        <div style={{display:"flex",marginTop:"70px",color:"rgb(78, 77, 77)"}}>
           <img src={p1} width={440} height={500}/>
           <div style={{height:"500px", width:"465px", backgroundColor:"cream",fontFamily:"time",textAlign:"center",paddingTop:"100px"}}>
                   <h1>Illuminating Elegance</h1>
                   <p style={{fontSize:"20px"}}>Ethereal by day, magical by night</p>

                <a href="#" onClick={shop} > <button style={{width:"150px", height:"50px", backgroundColor:"lightcoral" ,color:"white"}} >SHOP NOW</button></a> 
           </div>
           <img src={p2} width={440} height={500}/>
        </div>
        <div style={{fontFamily:"time",textAlign:"center",marginTop:"50px"}}>
          <h1>Because Self-Love Knows No Limits</h1>
      </div>
      <div style={{display:"flex", gap:"30px", margin:"40px"}}>
      <div>
        <img src={lm1} width={600} height={625}/>
      </div>
      <div>
      <img src={lm2} width={300} height={300}/><br/><br/>
      <img src={lm3} width={300} height={300}/>
      </div>
      <div>
      <img src={lm4 } width={300} height={300}/><br/><br/>
      <img src={lm5} width={300} height={300}/> 
      </div>
      </div>
      <div style={{height:"600px", width:"1150px", backgroundColor:"rgb(226, 220, 220)",display:"flex", margin:"100px"}}>
      <div style={{fontFamily:"time",textAlign:"center",paddingTop:"180px",paddingLeft:"100px"}}>
        <h1>Fancy a Cuppa?</h1>
        <p>The perfect companions for savoring the first sip of
        your favorite brew and starting your day with a warm
         embrace.</p>
        <a href="#" onClick={shop}><button style={{width:"150px", height:"50px", backgroundColor:"lightcoral",color:"white"}} 
          > SHOP NOW</button></a></div>
        <img src={lm6} width={650} height={600} style={{marginLeft:"160px"}}/>
      </div>
      
<div style={{display:"flex"}}>
    <img src={lm8 }  width={700} />
      <img src={lm7}  width={700} /> 
</div>

           
<div style={{fontFamily:"time",textAlign:"center",display:"flex",gap:"20px", marginTop:"50px",marginLeft:"80px", flexWrap:"wrap"}}>          
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
      <img src={img} style={{width:"100%" ,marginTop:"100px", height:"auto"}}/>
    </div>

       
   

        </>
    )
}
export default Gift;