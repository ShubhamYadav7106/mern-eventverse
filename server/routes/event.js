const express=require("express");
const router=express.Router();
const {protect,admin}=require("../middleware/auth");

const {createEvent,getAllEvents,getEventById,updateEvent,deleteEvent}=require("../controllers/eventController.js");
// all rautes
router.get("/",getAllEvents);
router.get("/:id",getEventById);
// create event - Admin only
router.post("/",protect,admin,createEvent);
router.put("/:id",protect,admin,updateEvent);
router.delete("/:id",protect,admin,deleteEvent);

modle.exports=router;