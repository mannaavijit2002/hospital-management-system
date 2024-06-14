const express = require('express');
const {
  getAllAppointments,
  updateAppointmentStatus,
  getAllDoctors,
  getAllMessages,
  addDoctor,
  addAdmin,
} = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/appointments', protect, admin, getAllAppointments);
router.patch('/appointments/:id', protect, admin, updateAppointmentStatus);
router.get('/doctors', protect, admin, getAllDoctors);
router.get('/messages', protect, admin, getAllMessages);
router.post('/doctors', protect, admin, addDoctor);
router.post('/admins', protect, admin, addAdmin);

module.exports = router;