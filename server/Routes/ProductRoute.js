const express= require("express");
const route=express.Router();
const ProductController= require("../Controllers/ProductControler");

route.get("/homeproductdisplay", ProductController.productDisplay);
route.post("/userpaydata" , ProductController.CustomerData)
route.post("/productdetail" , ProductController.ProductDetail)
route.post("/kitchenproductdisplay" , ProductController.Kitchendisplay)
route.post("/lightProduct",ProductController.LightProduct)
route.post("/wallProduct",ProductController.WallProduct)

module.exports=route;