import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from "axios";
import BASE_URL from '../config';
import { useNavigate, useParams } from 'react-router-dom';

const decorKartCategories = {
    "Decor": {
      "Decorative Accents": [
        "Temple Jars & Ginger Jars", "Table Top Decor", "Vases", "Divine Idols", "Human Figurines", "Animal & Bird Figurines"
      ],
      "Home Accessories": [
        "Clocks", "Candle Stands", "Incense Holders", "Bookends", "Photo Frames", "Centrepiece Decorative Bowls", "Decorative Plates"
      ]
    },
    "Kitchen & Dining": {
      "Serveware": ["Cake & Tiered Stands", "Specialty Serveware", "Trays & Platters", "Casseroles"],
      "Dinnerware": ["Dinner Plates", "Side Plates", "Bowls & Pasta Plates"]
    },
    "Wall Decor": {
      "Wall Art": ["Canvas Prints", "Metal Wall Art", "Wooden Wall Hangings", "Wall Plates"],
      "Mirrors": ["Wall Mirrors", "Decorative Mirrors", "Standing Mirrors"]
    },
    "Lighting": {
      "Lamps": ["Table Lamps", "Floor Lamps", "Bedside Lamps"],
      "Hanging Lights": ["Chandeliers", "Pendant Lights", "Wall Sconces"]
    },
    "Furniture": {
      "Seating": ["Accent Chairs", "Benches", "Stools"],
      "Tables": ["Coffee Tables", "Side Tables", "Console Tables"]
    },
    "Bath Decor": {
      "Bath Accessories": ["Soap Dispensers", "Toothbrush Holders", "Towel Racks"],
      "Shower Accessories": ["Shower Curtains", "Shower Mats", "Bathrobes"]
    }
  };


const EditProduct=()=>{
  const {id}=useParams();
  const navigate=useNavigate();
  const [mydata, setmyData]=useState({});

    // const [input, setInput] = useState({});
    const [images, setImages] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");


    const loadData=async()=>{
let  api = `${BASE_URL}/admin/EditProductdisplay`;
try {
     const response= await axios.post(api, {id:id});
     console.log(response.data);
    setmyData(response.data)

} catch (error) {
     console.log(error);
}
}

useEffect(()=>{
  loadData()
},[])

 const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
      setSelectedSubcategory("");
      setSelectedProduct("");
    };
  
    const handleSubcategoryChange = (e) => {
      setSelectedSubcategory(e.target.value);
      setSelectedProduct("");
    };
  
    const handleProductChange = (e) => {
      setSelectedProduct(e.target.value);
    };
  
    const handleInput = (e) => {
      const { name, value } = e.target;
      setmyData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleFileChange = (e) => {
      setImages([...e.target.files]);
    };
  
    // const handleSubmit = async () => {
    //   const formData = new FormData();
    //   for (let key in mydata) {
    //     formData.append(key, mydata[key]);
    //   }
    //   formData.append("category", selectedCategory);
    //   formData.append("subcategory", selectedSubcategory);
    //   formData.append("product", selectedProduct);
    //   for (let i = 0; i < images.length; i++) {
    //     formData.append("files", images[i]);
    //   }
  
    //   try {
    //     let api = `${BASE_URL}/admin/editdatasave`;
    //   const response =  await axios.post(api, formData, {
    //       headers: {'Content-Type': 'multipart/form-data'},
    //     });
    //     console.log(response.date)
    //     alert("File update successfully!");
    //    } catch (error) {
    //     console.error("Upload error:",error);
    //   }
    // };

    const handleSubmit = async () => {
      const formData = new FormData();
    
      // Append mydata fields after converting to string
      for (let key in mydata) {
        formData.append(key, JSON.stringify(mydata[key])); 
      }
    
      // Append category, subcategory, and product separately
      if (selectedCategory) formData.append("category", selectedCategory);
      if (selectedSubcategory) formData.append("subcategory", selectedSubcategory);
      if (selectedProduct) formData.append("product", selectedProduct);
    
      // Append files
      if (images.length > 0) {
        for (let i = 0; i < images.length; i++) {
          formData.append("files", images[i]);
        }
      }
    
      try {
        let api = `${BASE_URL}/admin/editdatasave`;
        const response = await axios.post(api, formData);
    
        console.log("API Response:", response.data);
    
        if (response.data.success) {
          alert("Product updated successfully!");
          navigate("/admin/products"); // Redirect
        } else {
          alert("Update failed! Please try again.");
        }
      } catch (error) {
        console.error("Upload error:", error);
      }
    };

 return(
        <>

<h6 style={{color:"red"}}>Edit PRODUCT </h6>
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="p-4 shadow-lg rounded" style={{ background: 'rgba(201, 192, 192, 0.8)', width: '60%', marginBottom: "300px", marginRight:"200px" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Select Product Category:</Form.Label>
            <Form.Select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">Select Category</option>
              {Object.keys(decorKartCategories).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </Form.Select>
          </Form.Group>

          {selectedCategory && (
            <Form.Group className="mb-3">
              <Form.Label>Select Subcategory:</Form.Label>
              <Form.Select value={selectedSubcategory} onChange={handleSubcategoryChange}>
                <option value="">Select Subcategory</option>
                {Object.keys(decorKartCategories[selectedCategory]).map((sub) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </Form.Select>
            </Form.Group>
          )}

          {selectedSubcategory && (
            <Form.Group className="mb-3">
              <Form.Label>Select Product:</Form.Label>
              <Form.Select value={selectedProduct} onChange={handleProductChange}>
                <option value="">Select Product</option>
                {decorKartCategories[selectedCategory][selectedSubcategory].map((prod) => (
                  <option key={prod} value={prod}>{prod}</option>
                ))}
              </Form.Select>
            </Form.Group>
          )}

<Form.Group className="mb-3" >
        <Form.Label>Enter Price</Form.Label>
          <Form.Control type="number" name="price" value={mydata.price || ""} onChange={handleInput} />
         </Form.Group>

         <Form.Group className="mb-3" >
        <Form.Label>Material</Form.Label>
          <Form.Control type="text" name="material" value={mydata.material || ""} onChange={handleInput} />
         </Form.Group>

         <Form.Group className="mb-3" >
        <Form.Label>Pack Context</Form.Label>
          <Form.Control type="text" name="pack" value={mydata.pack || ""} onChange={handleInput} />
         </Form.Group>

         <Form.Group className="mb-3" >
        <Form.Label>Dimensions</Form.Label>
          <Form.Control type="text" name="dimensions" value={mydata.dimensions || ""} onChange={handleInput} />
         </Form.Group>
         
         <Form.Group className="mb-3">
           <Form.Label>Enter Description</Form.Label>
           <Form.Control type="text" name="description" value={mydata.description || ""} onChange={handleInput} />
         </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload Images</Form.Label>
            <Form.Control type="file" multiple onChange={handleFileChange} />
          </Form.Group>

          <div className="d-flex justify-content-center">
  <Button onClick={handleSubmit} style={{ width: "50%" }}>Submit</Button>
</div>
        </Form>
      </div>
    </Container>
        
        </>
    )
}
export default EditProduct;
