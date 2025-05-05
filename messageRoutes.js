const express = require('express');
const { sendMessage, getAllMessages } = require('../controllers/messageController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, sendMessage);
router.get('/', protect, getAllMessages);

module.exports = router;