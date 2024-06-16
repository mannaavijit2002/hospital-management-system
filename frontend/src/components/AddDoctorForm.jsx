import React, { useState } from 'react';
import axios from 'axios';

const AddDoctorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
  });

  const { name, specialization } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/doctors', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={onChange} />
      </div>
      <div>
        <label>Specialization</label>
        <input type="text" name="specialization" value={specialization} onChange={onChange} />
      </div>
      <button type="submit">Add Doctor</button>
    </form>
  );
};

export default AddDoctorForm;