const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  date: String,
  time: String,
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
});
module.exports = mongoose.model('Appointment', AppointmentSchema);