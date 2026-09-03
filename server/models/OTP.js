const mongoose=require('mongoose');
const otpSchema=new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    action:{
        type: String,
        enum: ['account_verification', 'event_verification', 'event_registration'],
    },
    createdAt:{
        type: Date,
        default: Date.now,
        expires: 300 // OTP expires after 5 minutes
    }
})
module.exports=mongoose.model('OTP',otpSchema);