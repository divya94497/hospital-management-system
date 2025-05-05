const express = require('express');
const { bookAppointment, getAllAppointments, updateStatus } = require('../controllers/appointmentController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/book', protect, bookAppointment);
router.get('/', protect, getAllAppointments);
router.put('/status/:id', protect, updateStatus);

module.exports = router;