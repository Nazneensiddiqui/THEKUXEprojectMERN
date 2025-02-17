import { configureStore } from "@reduxjs/toolkit";
import myReducer from "../redux/CartSlice"



const Store=configureStore({
    reducer:{
        //your reducer
        myCart:myReducer
    }
})
export default Store;
