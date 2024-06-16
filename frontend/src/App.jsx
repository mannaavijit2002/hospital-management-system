import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import AppointmentForm from './components/AppointmentForm';
import MessageForm from './components/MessageForm';
import AppointmentList from './components/AppointmentList';
import DoctorList from './components/DoctorList';
import MessageList from './components/MessageList';
import AddDoctorForm from './components/AddDoctorForm';
import AddAdminForm from './components/AddAdminForm';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/appointments/new" component={AppointmentForm} />
          <Route path="/messages/new" component={MessageForm} />
          <Route path="/appointments" component={AppointmentList} />
          <Route path="/doctors" component={DoctorList} />
          <Route path="/messages" component={MessageList} />
          <Route path="/doctors/new" component={AddDoctorForm} />
          <Route path="/admins/new" component={AddAdminForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;