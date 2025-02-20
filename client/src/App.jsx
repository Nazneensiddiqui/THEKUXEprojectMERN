import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Gift from "./pages/gift";
import Dashboard from "./Admin/Dashborad";
import LogSystem from "./Admin/LoginSystem";
import InsertItems from "./Admin/Insert";
import Admin from "./Admin/Admin";
import UpdateProduct from "./Admin/UpdateProduct";
import Decor from "./pages/Decore";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Gift/>}/>
      <Route path="gift" element={<Gift/>}/>
      <Route path="decor" element={<Decor/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="productdetail/:id" element={<ProductDetail/>}/>
      
      <Route path="loginsystem" element={<LogSystem/>}/>
      </Route>
      <Route path="dashborad" element={<Dashboard/>}>
      <Route index element={<Admin/>}/>
      <Route path="insert" element={<InsertItems/>}/>
      <Route path="update" element={<UpdateProduct/>}/>
      
      
      </Route>
    
    </Routes>
    </BrowserRouter>
 
    </>
  )
}
export default App;