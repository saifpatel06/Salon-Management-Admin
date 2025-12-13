import { useState, useEffect } from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';
import StatCard from '../../components/Dashboard/StatCard';
import withAuth from '../../lib/withAuth';
import { initialBarbers, initialServices, initialAppointments } from '../../lib/dummyData';

function DashboardPage() {
  const [stats, setStats] = useState({
    totalBarbers: 0,
    totalServices: 0,
    totalAppointments: 0,
  });

  useEffect(() => {
    // Load data from localStorage or use initial data
    const barbers = JSON.parse(localStorage.getItem('barbers')) || initialBarbers;
    const services = JSON.parse(localStorage.getItem('services')) || initialServices;
    const appointments = JSON.parse(localStorage.getItem('appointments')) || initialAppointments;

    setStats({
      totalBarbers: barbers.length,
      totalServices: services.length,
      totalAppointments: appointments.length,
    });
  }, []);

  return (
    <AdminLayout pageTitle="Dashboard">
      <h2 className="mb-4">Dashboard Overview</h2>
      
      <div className="row g-4">
        <div className="col-md-4">
          <StatCard
            title="Total Barbers"
            value={stats.totalBarbers}
            icon="👨‍💼"
            color="primary"
          />
        </div>
        
        <div className="col-md-4">
          <StatCard
            title="Total Services"
            value={stats.totalServices}
            icon="✂️"
            color="success"
          />
        </div>
        
        <div className="col-md-4">
          <StatCard
            title="Total Appointments"
            value={stats.totalAppointments}
            icon="📅"
            color="info"
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-white border-bottom">
              <h5 className="mb-0">Quick Statistics</h5>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="p-3">
                    <h3 className="text-success mb-2">78%</h3>
                    <p className="text-muted mb-0">Booking Rate</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-3">
                    <h3 className="text-info mb-2">$2,450</h3>
                    <p className="text-muted mb-0">Today's Revenue</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-3">
                    <h3 className="text-warning mb-2">12</h3>
                    <p className="text-muted mb-0">Pending Appointments</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-3">
                    <h3 className="text-primary mb-2">4.8</h3>
                    <p className="text-muted mb-0">Average Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default withAuth(DashboardPage);