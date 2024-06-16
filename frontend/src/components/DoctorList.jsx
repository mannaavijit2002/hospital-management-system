import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get('/api/doctors');
        setDoctors(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <h2>Doctors</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor._id}>
            {doctor.name} - {doctor.specialization}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;