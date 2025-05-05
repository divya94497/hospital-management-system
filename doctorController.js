const Doctor = require('../models/Doctor');
const User = require('../models/User');

exports.addDoctor = async (req, res) => {
  const { name, specialty } = req.body;
  try {
    const doctor = await Doctor.create({ name, specialty });
    res.status(201).json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await User.create({ name, email, password: hashedPassword, role: 'admin' });
    res.status(201).json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
