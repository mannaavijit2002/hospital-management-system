const Appointment = require('../models/Appointment');
const Message = require('../models/Message');

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

const sendMessage = async (req, res) => {
    const { recipientId, content } = req.body;

    try {
        const newMessage = new Message({
            senderId: req.user.id,
            recipientId,
            content,
            date: Date.now()
        });

        const message = await newMessage.save();
        res.json(message);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    bookAppointment,
    sendMessage
};