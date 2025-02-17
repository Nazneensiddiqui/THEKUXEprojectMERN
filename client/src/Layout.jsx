import { Outlet } from "react-router-dom";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Topmanu from "./componets/Topmanu";


const Layout=()=>{
    return(
        <>
        <div style={{position:"sticky", top:"0", zIndex:"10"}}>
        <Topmanu/>
        <Header/> 
      </div>
   
        <Outlet/>
        <Footer/>
        

        </>
    )
}
export default Layout;