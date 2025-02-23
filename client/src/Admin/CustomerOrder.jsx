import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import BASE_URL from "../config";


const CustomerOrder=()=>{
const[CustomerData, setCustomerData]=useState([])

const loadData=async()=>{
    const api=`${BASE_URL}/admin/coustomerorderdisplay`;
    try {
        const response= await axios.get(api);
        setCustomerData(response.data)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    loadData()
},[])


let sno=0;
const ans=CustomerData.map((key)=>{
sno++;
return(
    <>                                                                 
   <tr>
    <td>{sno}</td>
    <td>{key.name}</td>
    <td>{key.product}</td>
    <td>{key.email}</td>
    <td>{key.address}</td>
    <td>{key.city}</td>
    <td>{key.state}</td>
    <td>{key.contact}</td>
    <td>{key.amount}</td>
    <td>{key.createdAt}</td>
     </tr> 
    </>
)
})
 return(
        <>
        <h5 style={{color:"yellow"}}>Customer Order</h5>
    <Table striped bordered hover style={{fontSize:"10px", width:"1100px"}}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Customer Name</th>
          <th>Product</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Contact</th>
          <th>Amount</th>
          <th>Delivery Day</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
 
        </>
    )
}
export default CustomerOrder