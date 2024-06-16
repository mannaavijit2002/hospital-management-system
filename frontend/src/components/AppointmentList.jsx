import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get('/api/appointments');
        setAppointments(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment._id}>
            {appointment.date} at {appointment.time} with Doctor ID {appointment.doctorId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;