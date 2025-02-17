const express=require("express")
const app=express();
require("dotenv").config()
const cors=require("cors")

const port=process.env.PROT || 8060
 const dbcon=process.env.DBCON 

const mongoose=require("mongoose")
const bodyParser=require("body-parser")

const AdminRoute=require("./Routes/AdminRoute")
const ProductRoute=require("./Routes/ProductRoute")


mongoose.connect(dbcon).then((res)=>{
    console.log("DB Conneced");
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/admin",AdminRoute)
app.use("/product",ProductRoute )

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static('uploads')); 

app.listen(port , ()=>{
    console.log(`server run on ${port}`)
})
