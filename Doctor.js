const mongoose = require('mongoose');
const DoctorSchema = new mongoose.Schema({
  name: String,
  specialty: String
});
module.exports = mongoose.model('Doctor', DoctorSchema);