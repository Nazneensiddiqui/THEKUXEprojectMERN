// const express=require("express")
// const route=express.Router()
// const AdminController=require("../Controllers/AdminController")
// const multer = require('multer');
// const path = require('path');


// // Set storage engine for Multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/'); // Set the folder where files will be saved
//     },
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()}-${file.originalname}`); // Save file with a unique name
//     },
//   });
  
//   // File filter for allowed extensions (optional)
//   const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = /jpeg|jpg|png|pdf|webp/;
//     const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = allowedFileTypes.test(file.mimetype);
  
//     if (extname && mimetype) {  
//       cb(null, true);
//     } else {
//       cb(new Error('Invalid file type. Only JPEG, PNG, and PDF are allowed.'));
//     }
//   };
  
//   // Multer middleware configuration
//   const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: { fileSize: 5 * 1024 * 1024 }, // Limit files to 5MB
//   });




// route.post("/adminlogin",AdminController.LoginSystem)

// route.post("/productsave",upload.array('files', 10), AdminController.ProductSave);
// route.post("/productdisplay",AdminController.ProductDisplay)
// route.post("/deletepro", AdminController.DeleteProduct)
// route.post("/productmakeprimary",AdminController.ProductMakePrimary)
// route.post("/productmakenormal", AdminController.ProductNormal)
// route.get("/coustomerorderdisplay", AdminController.CustomerOrder)
// route.get("/displayallcustome", AdminController.displayAllCustomer)
// route.post("/EditProductdisplay",AdminController.EditDisplay)
// route.post("/editdatasave",AdminController.EditproductSave)


// module.exports=route


const express = require("express");
const route = express.Router();
const AdminController = require("../Controllers/AdminController");
const multer = require("multer");
const path = require("path");

// Middleware for parsing JSON and form data
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

// Set storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Set the folder where files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

// File filter for allowed extensions
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png|pdf|webp/;
  const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedFileTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG, and PDF are allowed."));
  }
};

// Multer middleware configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit files to 5MB
});

// Routes
route.post("/adminlogin", AdminController.LoginSystem);
route.post("/productsave", upload.array("files", 10), AdminController.ProductSave);
route.post("/productdisplay", AdminController.ProductDisplay);
route.post("/deletepro", AdminController.DeleteProduct);
route.post("/productmakeprimary", AdminController.ProductMakePrimary);
route.post("/productmakenormal", AdminController.ProductNormal);
route.get("/coustomerorderdisplay", AdminController.CustomerOrder);
route.get("/displayallcustome", AdminController.displayAllCustomer);
route.post("/display", AdminController.EditDisplay);


// ✅ Fix: Add Multer middleware in `editdatasave`
//route.post("/editdatasave", upload.array("files", 10) ,AdminController.EditproductSave);

module.exports = route;