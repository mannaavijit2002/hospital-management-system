const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  contactDetails: { type: String, required: true },
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;