const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String
});
module.exports = mongoose.model('Message', MessageSchema);