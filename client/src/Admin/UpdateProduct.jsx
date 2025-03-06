import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from '../config';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const UpdateProduct=()=>{

    const [mydata, setMydata]= useState([]);

const navigate=useNavigate()
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 5; // Change as needed
    
   const loadData=async(pageNumber)=>{
    const api=`${BASE_URL}/admin/productdisplay?page=${pageNumber}&limit=${limit}`;
    try {
         const response= await axios.post(api);
         console.log(response.data);
         setMydata(response.data);
    } catch (error) {
         console.log(error);
    }
   }

   useEffect(()=>{
    loadData();
}, []);

const handlePrimary=async( id)=>{
   
    const api=`${BASE_URL}/admin/productmakeprimary`;
    try {
         const response= await axios.post(api, {id:id});
         console.log(response.data);
    } catch (error) {
         console.log(error);
    }
    loadData();
}

const handleNormal = async(id)=>{
    const api=`${BASE_URL}/admin/productmakenormal`;
    try {
         const response= await axios.post(api, {id:id});
         console.log(response.data);
    } catch (error) {
         console.log(error);
    }
    loadData();
}

const DeletePro=async(id)=>{
     const api=`${BASE_URL}/admin/deletepro`;
     try {
          const response= await axios.post(api, {id:id});
          console.log(response.data);
          alert(" Product Successfully Delete")
     } catch (error) {
          console.log(error);
     }
     loadData();
 }

//  const EditPro=(id)=>{
//      alert(id)
//      navigate(`/dashborad/edit/${id}`) 
//  }


const ans=mydata.map((key)=>{
     return(
        <>
         <tr>
           <td>  <img src={`${BASE_URL}/${key.defaultImage}`} style={{ width: 50, height: 50 }} alt="Uploaded File" /></td>
            <td>{key.product} </td>
           <td>{key.price} </td>
            <td> {key.description} </td>
            <td> {key.category} </td>
            <td> {key.subcategory} </td>
            <td> {key.status} </td>
            <td> {key.ratings}</td>
            <td>
              {key.status=="normal" ? (<>
               <Button variant="info" size="sm" onClick={()=>{handlePrimary( key._id)}}>Primary</Button>
              </>):(<>
                  <Button variant="success" size="sm" onClick={()=>{handleNormal(key._id)}}>Noraml</Button>
              </>)} 
           </td>
           <td>
           <Button variant="danger" size="sm" onClick={()=>{DeletePro(key._id)}}>Delete</Button></td>
         {/* <td>  <Button variant="warning" size="sm" onClick={()=>{EditPro(key._id)}}>Edit</Button> 
           </td>*/}
         </tr>
        </>
     )
})

 return(
        <>
          <h5 style={{color:"yellow"}}> Update Product</h5>
     <Table striped bordered hover style={{fontSize:"10px", width:"83%"}}>
      <thead>
        <tr>
          <th>Images</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Sub Category</th>
          <th>Status</th>
          <th>Rating</th>
          <th> Action</th>
          <th> Delete</th>
          {/* <th> Edit</th> */}
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
      </Table>
 {/* Pagination Controls */}
 <div>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
                <span> Page {page} of {totalPages} </span>
                <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
            </div>

        </>
    )
}

export default UpdateProduct;


