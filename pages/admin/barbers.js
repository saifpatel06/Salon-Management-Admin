import { useState, useEffect } from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';
import BarberModal from '../../components/Modals/BarberModal';
import withAuth from '../../lib/withAuth';
import { initialBarbers } from '../../lib/dummyData';

function BarbersPage() {
  const [barbers, setBarbers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingBarber, setEditingBarber] = useState(null);

  useEffect(() => {
    // Load barbers from localStorage
    const savedBarbers = localStorage.getItem('barbers');
    if (savedBarbers) {
      setBarbers(JSON.parse(savedBarbers));
    } else {
      setBarbers(initialBarbers);
      localStorage.setItem('barbers', JSON.stringify(initialBarbers));
    }
  }, []);

  const saveBarbers = (updatedBarbers) => {
    setBarbers(updatedBarbers);
    localStorage.setItem('barbers', JSON.stringify(updatedBarbers));
  };

  const handleAddBarber = () => {
    setEditingBarber(null);
    setShowModal(true);
  };

  const handleEditBarber = (barber) => {
    setEditingBarber(barber);
    setShowModal(true);
  };

  const handleDeleteBarber = (id) => {
    if (window.confirm('Are you sure you want to delete this barber?')) {
      const updatedBarbers = barbers.filter((b) => b.id !== id);
      saveBarbers(updatedBarbers);
    }
  };

  const handleSaveBarber = (barberData) => {
    if (editingBarber) {
      // Update existing barber
      const updatedBarbers = barbers.map((b) =>
        b.id === editingBarber.id ? { ...barberData, id: b.id } : b
      );
      saveBarbers(updatedBarbers);
    } else {
      // Add new barber
      const newBarber = {
        ...barberData,
        id: barbers.length > 0 ? Math.max(...barbers.map((b) => b.id)) + 1 : 1,
      };
      saveBarbers([...barbers, newBarber]);
    }
    setShowModal(false);
    setEditingBarber(null);
  };

  return (
    <AdminLayout pageTitle="Barbers Management">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Barbers Management</h2>
        <button className="btn btn-primary" onClick={handleAddBarber}>
          + Add Barber
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Specialization</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {barbers.map((barber) => (
                  <tr key={barber.id}>
                    <td>{barber.id}</td>
                    <td className="fw-semibold">{barber.name}</td>
                    <td>{barber.email}</td>
                    <td>{barber.phone}</td>
                    <td>{barber.specialization}</td>
                    <td>
                      <span
                        className={`badge bg-${
                          barber.status === 'Active' ? 'success' : 'secondary'
                        }`}
                      >
                        {barber.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEditBarber(barber)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteBarber(barber.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <BarberModal
          barber={editingBarber}
          onSave={handleSaveBarber}
          onClose={() => {
            setShowModal(false);
            setEditingBarber(null);
          }}
        />
      )}
    </AdminLayout>
  );
}

export default withAuth(BarbersPage);