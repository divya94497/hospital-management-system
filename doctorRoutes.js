const express = require('express');
const { addDoctor, getAllDoctors, addAdmin } = require('../controllers/doctorController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', protect, addDoctor);
router.get('/', protect, getAllDoctors);
router.post('/add-admin', protect, addAdmin);

module.exports = router;