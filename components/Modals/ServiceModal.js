import { useState } from 'react';

export default function ServiceModal({ service, onSave, onClose }) {
  const [formData, setFormData] = useState(
    service || {
      name: '',
      price: '',
      duration: '',
      category: 'Hair',
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.duration) {
      alert('Please fill in all fields');
      return;
    }
    onSave({
      ...formData,
      price: parseFloat(formData.price),
      duration: parseInt(formData.duration),
    });
  };

  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {service ? 'Edit Service' : 'Add New Service'}
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Service Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="Hair">Hair</option>
                  <option value="Beard">Beard</option>
                  <option value="Facial">Facial</option>
                  <option value="Massage">Massage</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Price ($)</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                  min="0"
                  step="0.01"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Duration (minutes)</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  required
                  min="5"
                  step="5"
                />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}