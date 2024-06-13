const Appointment = require('../models/Appointment');

const bookAppointment = async (req, res) => {
    const { doctorId, date, time } = req.body;

    try {
        const newAppointment = new Appointment({
            userId: req.user.id,
            doctorId,
            date,
            time,
            status: 'pending'
        });

        const appointment = await newAppointment.save();
        res.json(appointment);
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

module.exports = {
    bookAppointment,
    setStatusOfAppointment
};