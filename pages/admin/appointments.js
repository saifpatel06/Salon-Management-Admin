import { useState, useEffect } from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';
import CalendarContainer from '../../components/Calendar/CalendarContainer';
import withAuth from '../../lib/withAuth';
import { initialAppointments, initialBarbers } from '../../lib/dummyData';

function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    // Load fresh data
    localStorage.setItem('appointments', JSON.stringify(initialAppointments));
    localStorage.setItem('barbers', JSON.stringify(initialBarbers));
    
    setAppointments(initialAppointments);
    setBarbers(initialBarbers);
  }, []);

  return (
    <AdminLayout pageTitle="Calendar">
      <CalendarContainer 
        appointments={appointments}
        barbers={barbers}
      />
    </AdminLayout>
  );
}

export default withAuth(AppointmentsPage);