const express =require('express');
const cors=require('cors');
const dotenv=require('dotenv');

const mongoose=require('mongoose');
const authRoutes=require('./routes/auth');
const eventRoutes=require('./routes/event');
const bookingRoutes=require('./routes/booking');
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
//routes
app.use('/api/auth', authRoutes);
app.use('/api/events',eventRoutes);
app.use('api/bookings',bookingRoutes);

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



// const port=500;