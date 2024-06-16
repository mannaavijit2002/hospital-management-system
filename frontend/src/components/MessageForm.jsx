import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = () => {
  const [formData, setFormData] = useState({
    recipientId: '',
    content: '',
  });

  const { recipientId, content } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/messages', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Recipient ID</label>
        <input type="text" name="recipientId" value={recipientId} onChange={onChange} />
      </div>
      <div>
        <label>Message</label>
        <textarea name="content" value={content} onChange={onChange}></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default MessageForm;