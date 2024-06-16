import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    doctorId: '',
    date: '',
    time: '',
  });

  const { doctorId, date, time } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/appointments', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Doctor ID</label>
        <input type="text" name="doctorId" value={doctorId} onChange={onChange} />
      </div>
      <div>
        <label>Date</label>
        <input type="date" name="date" value={date} onChange={onChange} />
      </div>
      <div>
        <label>Time</label>
        <input type="time" name="time" value={time} onChange={onChange} />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;