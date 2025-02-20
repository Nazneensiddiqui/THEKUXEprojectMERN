import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { qntyInc, qntyDec, itemRemove } from "../redux/CartSlice";
import rem from "../images/rem.png";
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react";
import axios from "axios";



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from "../config";
import { useEffect } from "react";


const Contact = () => {
  const { amt } = useParams();
  const [MyData, setMydata] = useState({});

 

  const MyCart = useSelector(state => state.myCart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const qtyIncrement = (id) => {
    dispatch(qntyInc({ id: id }));
  }

  const qtyDecrement = (id) => {
    dispatch(qntyDec({ id: id }))
  }

  const removeItem = (id) => {
    dispatch(itemRemove({ id: id }))
  }

  const loadData = async() => {
    const api=`${BASE_URL}/user/usershow`;
    try {
      const response= await axios.post(api, {id:localStorage.getItem("userid")})
      console.log(response.data)
      setMydata(response.data)
    } catch (error) {
      console.log(error)
    }
  }

useEffect(()=>{
  if (!localStorage.getItem("username"))
    {
      navigate("/loginsystem");
    }
  loadData()
},[])


let totalAmount=0;
let myProImg="";
let myProList="";
  const Data = MyCart.map((key) => {
    totalAmount += key.price * key.qnty;
    myProImg=`${BASE_URL}/${key.defaultImage}`;
    myProList+=key.description+", ";

    return (
      <>
        <tr>
          <td> <img src={`${BASE_URL}/${key.defaultImage}`}  width="100" height="100" /> </td>
          <td> {key.description} </td>
          <td> {key.price}</td>
          <td>

            <a href="#" onClick={() => { qtyDecrement(key.id) }}>
              <FaCircleMinus />
            </a>
           <span style={{ marginLeft: '10px', marginRight: '10px', fontWeight: 'bold' }}>
              {key.qnty}
            </span>
          <a href="#" onClick={() => { qtyIncrement(key.id) }}>
              <FaPlusCircle />
            </a>
               </td>
          <td> {key.qnty * key.price} </td>

          <td>
            <img src={rem} width={25} height={25} onClick={() => { removeItem(key.id) }} />

          </td>
        </tr>

      </>
    )
  })

  useEffect(()=>{
    if (!localStorage.getItem("username"))
    {
      navigate("/login");
    }

    loadData();
}, [])

//***************Razorpay********************************** */
const [shoe,setShoe] = useState({
  name: "Training Shoes",
  creator: "Nike",
  img: "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  price: 500,
});


const initPay = (data) => {
const options = {
  key : "rzp_test_w8SqaqpLZuusnD",
  amount: data.amount,
  currency: data.currency,
  name: myProList,
  description: "Test",
  image:myProImg,
  order_id: data.id,
  handler: async (response) => {
    try {
      const verifyURL = "https://localhost:8060/api/payment/verify";
      const {data} = await axios.post(verifyURL,response);
    } catch(error) {
      console.log(error);
    }
  },
  theme: {
    color: "#3399cc",
  },
};
const rzp1 = new window.Razorpay(options);
rzp1.open();
};




 const handlePay = async () => {
  try {
    const orderURL = "http://localhost:8060/api/payment/orders";
    const {data} = await axios.post(orderURL,{amount: totalAmount});
    console.log(data);
    initPay(data.data);
  } catch (error) {
    console.log(error);
  }
};







  return (
    <>
      <center>

        <h1 style={{ marginTop: "10px", fontFamily: 'Times New Roman, Times, serif' }}>THE LUXE CORNER</h1>
        <div id="contact">
          <div id="fome">
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "20px", marginRight: "60px" }}>
              <h5>Contact</h5>
              <a href="#" style={{ color: "black" }}>log in</a></div>

            <input type="text" placeholder="Email or Mobile phone number" name="email" value={MyData.email}
              style={{ width: "600px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "5px", marginRight: "30px" }} />

            <div style={{ display: "flex", fontSize: "14px", marginTop: "8px", marginLeft: "25px" }}>
              <input type="checkbox" style={{ width: "15px", height: "15px", marginTop: "4px", border: "1px solid rgb(199, 206, 214)" }} />
              Email me with news and offers</div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "20px", marginRight: "55px" }}>
              <h5>Delivery</h5>
            </div>

            <input type="text" placeholder="Name" name="name" value={MyData.name}
              style={{ width: "600px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "10px", marginRight: "30px" }} />

            <div style={{ display: "flex", marginLeft: "28px", gap: "20px" }}>
              <input type="text" placeholder="Address" name="address" value={MyData.address}
                style={{ width: "600px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "10px", marginRight: "55px" }} />
            </div>

            <input type="text" placeholder="Phone" name="phoneno" value={MyData.contact}
              style={{ width: "600px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "10px", marginRight: "30px" }} />

            <div style={{ display: "flex", marginLeft: "28px", gap: "20px" }}>
              <input type="text" placeholder="City" name="city" value={MyData.city}
                style={{ width: "290px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "10px" }} />

              <input type="text" placeholder="State" name="state" value={MyData.state}
                style={{ width: "290px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "10px" }} />

            </div>
            <input type="text" placeholder="Amount" name="amount" value={totalAmount} 
              style={{ width: "600px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "10px", marginRight: "30px" }} />

            <div style={{ display: "flex", fontSize: "14px", marginLeft: "30px", marginTop: "8px" }}>
              <input type="checkbox" style={{ width: "15px", height: "15px", marginTop: "4px", border: "1px solid rgb(199, 206, 214)" }} />
              Save this information for next time</div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "50px", marginRight: "55px" }}>
              <h5>Shipping method</h5>
            </div>
            <div style={{ width: "600px", height: "50px", backgroundColor: "rgb(216, 218, 221)", fontSize: "15px", paddingTop: "15px", paddingRight: "160px" }}>
              Enter your shipping address to view available shipping methods.
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "50px", marginRight: "55px" }}>
              <h5>Payment</h5></div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "px", marginLeft: "50px", marginRight: "55px", fontSize: "16px" }}>
              All transactions are secure and encrypted. </div>

            <button onClick={handlePay} >Complete Order</button>
          </div>



          <div >
            {/* ////////////////Display to ADDTOCART ////////////////////////      */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th> Price</th>
                  <th> Quantity</th>
                  <th> Total</th>
                  <th>  </th>
                </tr>
              </thead>
              <tbody>
                {Data}
                <tr>
                  <th>#</th>
                  <th> </th>
                  <th> </th>
                  <th> Total Amount: </th>
                  <th>₹ {totalAmount}  </th>
                  <th> </th>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </center>
      <ToastContainer />
    </>
  )
}
export default Contact;