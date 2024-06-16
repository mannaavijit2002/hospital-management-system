import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get('/api/messages');
        setMessages(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map(message => (
          <li key={message._id}>
            To: {message.recipientId} - {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;