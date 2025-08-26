import LoaderComp from "./Loader";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";


const PaymentDone=()=>{
    // const{id}=useParams();
    // const[mydata, setmydata]=useState({});
    // const [isLoader, setIsLoader]=useState(true);
  
  


    setTimeout(()=>{
        setIsLoader(false);
    }, 4000);


    // const loaddata=()=>{
    //     let api= `http://localhost:3000/user${id}`;
    //     axios.get(api).then((res)=>{
    //         console.log(res.data);
    //         setmydata(res.data);
    //     })
     
    // }
    
    // useEffect(()=>{
    //     loaddata();
    // },[])
    

  return(
        <>
<center>

        {isLoader?(
             <div style={{width:"100px", margin:"auto", paddingTop:"30px"}}>
             <LoaderComp/>
             </div>
        ):(
            <h6 align="center" style={{color:"gray", margin:"150px"}}>  Thank you {mydata.name}<br/> <br/>
            Your Order Succesfully Placed <br/>
           We will send your products within 6 to 7 working days</h6>
        )}



        </center>
         </>
    )
}

export default PaymentDone;