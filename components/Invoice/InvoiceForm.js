import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './InvoiceForm.module.css';

export default function InvoiceForm({ appointments, services: availableServices, onPreview }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    invoiceNumber: `INV-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    services: [],
    taxRate: 10,
    notes: '',
    status: 'Pending',
  });

  const [selectedAppointment, setSelectedAppointment] = useState('');

  // Load appointment data
  const handleAppointmentSelect = (e) => {
    const appointmentId = e.target.value;
    setSelectedAppointment(appointmentId);

    if (!appointmentId) {
      setFormData({
        ...formData,
        customerName: '',
        services: [],
      });
      return;
    }

    const appointment = appointments.find(apt => apt.id.toString() === appointmentId);
    if (appointment) {
      // Find service details
      const service = availableServices.find(s => s.name === appointment.service);
      
      setFormData({
        ...formData,
        customerName: appointment.customerName,
        services: [{
          name: appointment.service,
          barber: appointment.barber,
          price: service?.price || 0,
          duration: service?.duration || 0,
        }],
      });
    }
  };

  const addService = () => {
    setFormData({
      ...formData,
      services: [...formData.services, { name: '', barber: '', price: 0, duration: 0 }],
    });
  };

  const updateService = (index, field, value) => {
    const newServices = [...formData.services];
    newServices[index][field] = field === 'price' || field === 'duration' ? parseFloat(value) || 0 : value;
    setFormData({ ...formData, services: newServices });
  };

  const removeService = (index) => {
    const newServices = formData.services.filter((_, i) => i !== index);
    setFormData({ ...formData, services: newServices });
  };

  const calculateTotals = () => {
    const subtotal = formData.services.reduce((sum, service) => sum + service.price, 0);
    const tax = subtotal * (formData.taxRate / 100);
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totals = calculateTotals();
    const invoice = { ...formData, ...totals };
    
    // Save to localStorage
    const existingInvoices = JSON.parse(localStorage.getItem('invoices') || '[]');
    existingInvoices.push(invoice);
    localStorage.setItem('invoices', JSON.stringify(existingInvoices));
    
    router.push('/admin/invoices');
  };

  const handlePreview = () => {
    const totals = calculateTotals();
    const invoice = { ...formData, ...totals };
    onPreview(invoice);
  };

  const totals = calculateTotals();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        {/* Left Column */}
        <div className={styles.column}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Invoice Details</h3>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Invoice Number</label>
              <input
                type="text"
                className={styles.input}
                value={formData.invoiceNumber}
                onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Date</label>
                <input
                  type="date"
                  className={styles.input}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Due Date</label>
                <input
                  type="date"
                  className={styles.input}
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Payment Status</label>
              <select
                className={styles.select}
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Customer Information</h3>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Load from Appointment</label>
              <select
                className={styles.select}
                value={selectedAppointment}
                onChange={handleAppointmentSelect}
              >
                <option value="">Select an appointment</option>
                {appointments.map(apt => (
                  <option key={apt.id} value={apt.id}>
                    {apt.customerName} - {apt.date} {apt.time}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Customer Name *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                className={styles.input}
                value={formData.customerEmail}
                onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Phone</label>
              <input
                type="tel"
                className={styles.input}
                value={formData.customerPhone}
                onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.column}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Services</h3>
              <button type="button" className={styles.addBtn} onClick={addService}>
                + Add Service
              </button>
            </div>

            <div className={styles.servicesList}>
              {formData.services.map((service, index) => (
                <div key={index} className={styles.serviceItem}>
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceNumber}>Service {index + 1}</span>
                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={() => removeService(index)}
                    >
                      ×
                    </button>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Service Name</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={service.name}
                      onChange={(e) => updateService(index, 'name', e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Barber</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={service.barber}
                      onChange={(e) => updateService(index, 'barber', e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Price ($)</label>
                      <input
                        type="number"
                        className={styles.input}
                        value={service.price}
                        onChange={(e) => updateService(index, 'price', e.target.value)}
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Duration (min)</label>
                      <input
                        type="number"
                        className={styles.input}
                        value={service.duration}
                        onChange={(e) => updateService(index, 'duration', e.target.value)}
                        min="0"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}

              {formData.services.length === 0 && (
                <div className={styles.emptyState}>
                  <p>No services added yet</p>
                  <button type="button" className={styles.addBtn} onClick={addService}>
                    + Add First Service
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Totals */}
          <div className={styles.totalsSection}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Tax Rate (%)</label>
              <input
                type="number"
                className={styles.input}
                value={formData.taxRate}
                onChange={(e) => setFormData({ ...formData, taxRate: parseFloat(e.target.value) || 0 })}
                min="0"
                step="0.1"
              />
            </div>

            <div className={styles.totalsBox}>
              <div className={styles.totalRow}>
                <span>Subtotal:</span>
                <span>${totals.subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.totalRow}>
                <span>Tax ({formData.taxRate}%):</span>
                <span>${totals.tax.toFixed(2)}</span>
              </div>
              <div className={`${styles.totalRow} ${styles.totalFinal}`}>
                <span>Total:</span>
                <span>${totals.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Notes</h3>
            <textarea
              className={styles.textarea}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows="4"
              placeholder="Add any additional notes here..."
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actions}>
        <button type="button" className={styles.cancelBtn} onClick={() => router.back()}>
          Cancel
        </button>
        <button type="button" className={styles.previewBtn} onClick={handlePreview}>
          Preview
        </button>
        <button type="submit" className={styles.submitBtn}>
          Save Invoice
        </button>
      </div>
    </form>
  );
}