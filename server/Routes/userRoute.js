const express= require("express");
const route=express.Router();
const UserController= require("../Controllers/UserController");


route.post("/signup" , UserController.Signup)
route.post("/login" , UserController.Login)
route.get("/profile", UserController.Profile)
route.post("/usershow",UserController.getUserShow)


module.exports=route;