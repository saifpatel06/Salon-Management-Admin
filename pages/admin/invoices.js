import AdminLayout from '../../components/Layout/AdminLayout';
import InvoiceList from '../../components/Invoice/InvoiceList';
import withAuth from '../../lib/withAuth';

function InvoicesPage() {
  return (
    <AdminLayout pageTitle="Invoices">
      <InvoiceList />
    </AdminLayout>
  );
}

export default withAuth(InvoicesPage);