const express=require("express");
const router=express.Router();
const {protect,admin}=require("../middleware/auth");
const {bookEvent,getMyBookings,sendBookingOTP,confirmBooking,cancelBooking}=require("../controllers/bookingController");

router.post('/',protect,bookEvent);
router.get('/',protect,getMyBookings);
router.post('/send-otp',protect,sendBookingOTP);
router.put('/:id/confirm',protect,admin,confirmBooking);
router.delete('/:id',protect,admin,cancelBooking);
module.exports=router;