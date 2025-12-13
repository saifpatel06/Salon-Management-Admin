import { useState, useEffect } from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';
import ServiceModal from '../../components/Modals/ServiceModal';
import withAuth from '../../lib/withAuth';
import { initialServices } from '../../lib/dummyData';

function ServicesPage() {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    const savedServices = localStorage.getItem('services');
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    } else {
      setServices(initialServices);
      localStorage.setItem('services', JSON.stringify(initialServices));
    }
  }, []);

  const saveServices = (updatedServices) => {
    setServices(updatedServices);
    localStorage.setItem('services', JSON.stringify(updatedServices));
  };

  const handleAddService = () => {
    setEditingService(null);
    setShowModal(true);
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setShowModal(true);
  };

  const handleDeleteService = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter((s) => s.id !== id);
      saveServices(updatedServices);
    }
  };

  const handleSaveService = (serviceData) => {
    if (editingService) {
      const updatedServices = services.map((s) =>
        s.id === editingService.id ? { ...serviceData, id: s.id } : s
      );
      saveServices(updatedServices);
    } else {
      const newService = {
        ...serviceData,
        id: services.length > 0 ? Math.max(...services.map((s) => s.id)) + 1 : 1,
      };
      saveServices([...services, newService]);
    }
    setShowModal(false);
    setEditingService(null);
  };

  return (
    <AdminLayout pageTitle="Services Management">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Services Management</h2>
        <button className="btn btn-primary" onClick={handleAddService}>
          + Add Service
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Service Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Duration (min)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td>{service.id}</td>
                    <td className="fw-semibold">{service.name}</td>
                    <td>
                      <span className="badge bg-info">{service.category}</span>
                    </td>
                    <td>${service.price}</td>
                    <td>{service.duration} min</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEditService(service)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteService(service.id)}
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
        <ServiceModal
          service={editingService}
          onSave={handleSaveService}
          onClose={() => {
            setShowModal(false);
            setEditingService(null);
          }}
        />
      )}
    </AdminLayout>
  );
}

export default withAuth(ServicesPage);