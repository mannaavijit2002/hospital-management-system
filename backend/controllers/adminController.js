const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const Message = require('../models/Message');
const User = require('../models/User');

const viewAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const setStatusOfAppointment = async (req, res) => {
    const { appointmentId, status } = req.body;

    try {
        let appointment = await Appointment.findById(appointmentId);
        if (!appointment) {
            return res.status(404).json({ msg: 'Appointment not found' });
        }

        appointment.status = status;
        await appointment.save();
        res.json(appointment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const viewAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const viewAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const addDoctor = async (req, res) => {
    const { name, specialization, contact } = req.body;

    try {
        const newDoctor = new Doctor({
            name,
            specialization,
            contact
        });

        const doctor = await newDoctor.save();
        res.json(doctor);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const addAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'Admin already exists' });
        }

        user = new User({
            name,
            email,
            password,
            role: 'admin'
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    viewAllAppointments,
    setStatusOfAppointment,
    viewAllDoctors,
    viewAllMessages,
    addDoctor,
    addAdmin
};