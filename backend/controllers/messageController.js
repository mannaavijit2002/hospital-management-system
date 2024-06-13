const Message = require('../models/Message');

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

const viewAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    sendMessage,
    viewAllMessages
};