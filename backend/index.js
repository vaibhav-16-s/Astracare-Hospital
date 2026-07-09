
const dotenv=require("dotenv");
const express =require("express");
const cors=require ("cors");
const connectDB = require("./config/Db");

const PatientRoutes=require("./routes/PatientRoutes");

const AdminRoute=require('./routes/AdminRoute');
const LoginRoute=require('./routes/LoginRoute');
const app=express();

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Astracre");
});

//routes - api

app.use('/patient',PatientRoutes);

app.use('/admin',AdminRoute);
app.use('/api',LoginRoute);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server connected successfully");
});










