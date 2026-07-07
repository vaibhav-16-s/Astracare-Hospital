
const dotenv=require("dotenv");
const express =require("express");
const cors=require ("cors");
const connectDB = require("./config/Db");
const DocRoutes = require("./routes/DocRoutes");
const PatientRoutes=require("./routes/PatientRoutes");
const app=express();

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Astracre");
});

//routes - api
app.use('/doc', DocRoutes);
app.use('/patient',PatientRoutes);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server connected successfully");
});










