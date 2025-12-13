import { useState, useEffect } from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';
import CalendarViews from '../../components/Calendar/CalendarViews';
import withAuth from '../../lib/withAuth';
import { initialAppointments, initialBarbers } from '../../lib/dummyData';

function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    const savedAppointments = localStorage.getItem('appointments');
    const savedBarbers = localStorage.getItem('barbers');
    
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments));
    } else {
      setAppointments(initialAppointments);
      localStorage.setItem('appointments', JSON.stringify(initialAppointments));
    }

    if (savedBarbers) {
      setBarbers(JSON.parse(savedBarbers));
    } else {
      setBarbers(initialBarbers);
      localStorage.setItem('barbers', JSON.stringify(initialBarbers));
    }
  }, []);

  const handleAppointmentClick = (appointment) => {
    alert(`Appointment Details:\n\nCustomer: ${appointment.customerName}\nBarber: ${appointment.barber}\nService: ${appointment.service}\nTime: ${appointment.time}\nStatus: ${appointment.status}`);
  };

  return (
    <AdminLayout pageTitle="Appointments Calendar">
      <CalendarViews
        appointments={appointments}
        barbers={barbers}
        onAppointmentClick={handleAppointmentClick}
      />
    </AdminLayout>
  );
}

export default withAuth(AppointmentsPage);