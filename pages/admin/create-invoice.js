import { useState, useEffect } from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';
import InvoiceForm from '../../components/Invoice/InvoiceForm';
import InvoicePreview from '../../components/Invoice/InvoicePreview';
import withAuth from '../../lib/withAuth';
import { initialAppointments, initialServices } from '../../lib/dummyData';

function CreateInvoicePage() {
  const [appointments, setAppointments] = useState([]);
  const [services, setServices] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [previewInvoice, setPreviewInvoice] = useState(null);

  useEffect(() => {
    const savedAppointments = localStorage.getItem('appointments');
    const savedServices = localStorage.getItem('services');
    
    setAppointments(savedAppointments ? JSON.parse(savedAppointments) : initialAppointments);
    setServices(savedServices ? JSON.parse(savedServices) : initialServices);
  }, []);

  const handlePreview = (invoice) => {
    setPreviewInvoice(invoice);
    setShowPreview(true);
  };

  return (
    <AdminLayout pageTitle="Create Invoice">
      <InvoiceForm
        appointments={appointments}
        services={services}
        onPreview={handlePreview}
      />

      {showPreview && previewInvoice && (
        <InvoicePreview
          invoice={previewInvoice}
          onClose={() => setShowPreview(false)}
        />
      )}
    </AdminLayout>
  );
}

export default withAuth(CreateInvoicePage);