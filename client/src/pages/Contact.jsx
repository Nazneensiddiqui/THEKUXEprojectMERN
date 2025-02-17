import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { qntyInc, qntyDec, itemRemove } from "../redux/CartSlice";
import rem from "../images/rem.png";
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

import CashonDelivery from "../Paymants/CashOnDelivery";
import InternetBanking from "../Paymants/InternetBank";
import DebitCard from "../Paymants/DebitCard";
import Upi from "../Paymants/UPI";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from "../config";


const Contact = () => {
  const { amt } = useParams();
  const [input, setInput] = useState({});

  const [paymethod, setPayMethod] = useState("");

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

  const paydone = () => {
    const api=`${BASE_URL}/product/userpaydata`;
    axios.post(api, input).then((res) => {
      console.log(res);
      toast.success("Save Data Successfully!!")
    })
    console.log(paydone)
    navigate("/paydone")
  }



  let totalAmount = 0;
  const Data = MyCart.map((key) => {
    totalAmount += key.price * key.qnty;
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



  //<<<<<<<<<<<<<<< HANDLE INPUT TAGE>>>>>>>>>>>>>>>>>>>>
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    setPayMethod(value);
    console.log(input);
  }







  //     // .............payment ...................
  // const handleInput1=(e)=>{
  //   let val=e.target.value;
  //   setPayMethod(val);

  // }

  let ans1;
  if (paymethod == "cash on Delivery") {
    ans1 = <CashonDelivery />
  }
  else
    if (paymethod == "internet Banking") {
      ans1 = <InternetBanking />
    }
    else
      if (paymethod == "debit Card") {
        ans1 = <DebitCard />
      }
      else {
        ans1 = <Upi />
      }

  return (
    <>
      <center>

        <h1 style={{ marginTop: "10px", fontFamily: 'Times New Roman, Times, serif' }}>THE LUXE CORNER</h1>
        <div id="contact">
          <div id="fome">
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "20px", marginRight: "60px" }}>
              <h5>Contact</h5>
              <a href="#" style={{ color: "black" }}>log in</a></div>

            <input type="text" placeholder="Email or Mobile phone number" name="email" onChange={handleInput}
              style={{ width: "600px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "5px", marginRight: "30px" }} />

            <div style={{ display: "flex", fontSize: "14px", marginTop: "8px", marginLeft: "25px" }}>
              <input type="checkbox" style={{ width: "15px", height: "15px", marginTop: "4px", border: "1px solid rgb(199, 206, 214)" }} />
              Email me with news and offers</div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "20px", marginRight: "55px" }}>
              <h5>Delivery</h5>
            </div>

            <input type="text" placeholder="Name" name="name" onChange={handleInput}
              style={{ width: "600px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "10px", marginRight: "30px" }} />

            <div style={{ display: "flex", marginLeft: "28px", gap: "20px" }}>
              <input type="text" placeholder="Address" name="address" onChange={handleInput}
                style={{ width: "600px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "10px", marginRight: "55px" }} />
            </div>

            <input type="text" placeholder="Phone" name="phoneno" onChange={handleInput}
              style={{ width: "600px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "10px", marginRight: "30px" }} />

            <div style={{ display: "flex", marginLeft: "28px", gap: "20px" }}>
              <input type="text" placeholder="City" name="city" onChange={handleInput}
                style={{ width: "290px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "10px" }} />

              <input type="text" placeholder="State" name="state" onChange={handleInput}
                style={{ width: "290px", height: "50px", borderRadius: "5px", border: "1px solid rgb(199, 206, 214)", marginTop: "10px" }} />

            </div>
            <input type="text" placeholder="Amount" name="amount" onChange={handleInput}
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

            <div id="paymethod">

              <div>
                <input type="radio" name="paymethod" value="cash on Delivery" onChange={handleInput} style={{ marginLeft: "10px" }} />  Cash on Delivery
                <input type="radio" name="paymethod" value="internet Banking" onChange={handleInput} style={{ marginLeft: "150px" }} /> Internet Banking<br/>

                <input type="radio" name="paymethod" value="debit Card" onChange={handleInput} style={{ marginRight: "5px" }} /> Debit/Credit Card
                <input type="radio" name="paymethod" value="upi" onChange={handleInput} style={{ marginLeft: "136px" }} /> UPI/Phone Pay
              </div>

              <div>
                {ans1}
              </div>
            </div>
            <button onClick={paydone} >Complete Order</button>
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
                  <th> {totalAmount}  </th>
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