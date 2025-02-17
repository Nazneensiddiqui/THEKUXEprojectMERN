const express= require("express");
const route=express.Router();
const ProductController= require("../Controllers/ProductControler");

route.get("/homeproductdisplay", ProductController.productDisplay);
route.post("/userpaydata" , ProductController.CustomerData)


module.exports=route;