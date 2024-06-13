const Doctor = require('../models/Doctor');

const viewAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
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

const updateDoctor = async (req, res) => {
    const { doctorId, name, specialization, contact } = req.body;

    try {
        let doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ msg: 'Doctor not found' });
        }

        doctor.name = name || doctor.name;
        doctor.specialization = specialization || doctor.specialization;
        doctor.contact = contact || doctor.contact;

        await doctor.save();
        res.json(doctor);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const deleteDoctor = async (req, res) => {
    const { doctorId } = req.params;

    try {
        let doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ msg: 'Doctor not found' });
        }

        await doctor.remove();
        res.json({ msg: 'Doctor removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    viewAllDoctors,
    addDoctor,
    updateDoctor,
    deleteDoctor
};