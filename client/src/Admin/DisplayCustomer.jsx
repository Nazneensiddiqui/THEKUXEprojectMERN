import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from '../config';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const DisplayCustomer=()=>{
    const [mydata, setMydata]= useState([]);
    
    const loadData=async()=>{
        const api=`${BASE_URL}/admin/displayallcustome`;
        try {
             const response= await axios.get(api);
             console.log(response.data);
             setMydata(response.data);
        } catch (error) {
             console.log(error);
        }
       }

       useEffect(()=>{
        loadData();
    }, []);
   
    let sno=0;
    const ans=mydata.map((key)=>{
         sno++;
          return(
            <>
              <tr>
              <td>  {sno}</td>
                <td> {key.name} </td>
                <td> {key.address} </td>
                <td> {key.city} </td>
                <td> {key.contact} </td>
                <td> {key.email} </td>   
              </tr>
            </>
          )
    })
    
    
    return(
        <>
          <h4> Display All Customers</h4>
          <Table striped bordered hover style={{fontSize:"12px",width:"1200px"}}>
      <thead>
        <tr>
          <th>So No.</th>
          <th>Customer Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Contact no.</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
      </Table>
        </>
    )
}

export default DisplayCustomer;