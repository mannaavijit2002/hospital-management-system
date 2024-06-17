# Hospital Management System

A comprehensive Hospital Management System that facilitates efficient communication and management of appointments between users and administrators.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

### General Features
- **Register**: Users and admins can register an account.
- **Login**: Secure login for registered users and admins.
- **Send Message**: Users can send messages to admins or healthcare professionals.

### User Features
- **Book an Appointment**: Users can book appointments with healthcare professionals.

### Admin Features
- **View All Appointments**: Admins can view all scheduled appointments.
- **Set Status of Appointment**: Admins can set the status of appointments (accept, reject, pending).
- **View All Doctors**: Admins can view all registered doctors.
- **View All Messages**: Admins can view all messages sent by users.
- **Add a Doctor**: Admins can add new doctors.
- **Add an Admin**: Admins can add new admins.

## Project Structure

```plaintext
hospital-management-system/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── appointmentController.js
│   │   ├── authController.js
│   │   ├── doctorController.js
│   │   └── messageController.js
│   ├── models/
│   │   ├── admin.js
│   │   ├── appointment.js
│   │   ├── doctor.js
│   │   ├── message.js
│   │   └── user.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── appointmentRoutes.js
│   │   ├── authRoutes.js
│   │   ├── doctorRoutes.js
│   │   └── messageRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddAdminForm.jsx
│   │   │   ├── AddDoctorForm.jsx
│   │   │   ├── AppointmentForm.jsx
│   │   │   ├── AppointmentList.jsx
│   │   │   ├── DoctorList.jsx
│   │   │   ├── LoginForm.jsx
│   │   │   ├── MessageForm.jsx
│   │   │   ├── MessageList.jsx
│   │   │   └── RegisterForm.jsx
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   ├── index.css
│   │   └── vite.config.js
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
