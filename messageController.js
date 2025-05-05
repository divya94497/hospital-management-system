const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  const { message } = req.body;
  try {
    const newMessage = await Message.create({
      userId: req.user._id,
      message
    });
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().populate('userId');
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};