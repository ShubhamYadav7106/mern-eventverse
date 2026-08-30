const express =require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const app=express();
const mongoose=require('mongoose');
dotenv.config();
app.use(cors());

mongoose.connect(process.env.MONGO_URI,{

}).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error('Error connecting to MongoDB:', err);
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`serever is running on port ${PORT}`);
})



const port=500;