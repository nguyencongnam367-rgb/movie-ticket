const express = require("express");

const {
  createBooking,
  getMyBookings,
  getBookingById,
} = require("../controllers/bookingController");

const router = express.Router();

// ======================================================
// TẠO ĐẶT VÉ
// POST /api/bookings
// ======================================================

router.post("/", createBooking);


// ======================================================
// LẤY DANH SÁCH VÉ CỦA USER
// GET /api/bookings/user/:userId
// ======================================================

router.get("/user/:userId", getMyBookings);


// ======================================================
// LẤY CHI TIẾT 1 VÉ
// GET /api/bookings/:id
// ======================================================

router.get("/:id", getBookingById);


module.exports = router;