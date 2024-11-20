const express=require("express")
const mongoose=require("mongoose")
const dotEnv=require("dotenv")
const bodyParser = require('body-parser');
const vendorRoutes = require('./routes/vendorRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const cors=require("cors");

const app=express()
dotEnv.config()
app.use(cors())
app.use(bodyParser.json());
app.use('/vendors', vendorRoutes);
app.use('/resources', resourceRoutes);
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB connected Successfully"))
.catch((error)=>console.log(error))

const port= process.env.port || 5000
app.use("/",(req,res)=>{
    res.send("<h1>Welcome to dummy staffing website")
})

app.listen(port,()=>{
    console.log(`server running at port ${port}`)

})