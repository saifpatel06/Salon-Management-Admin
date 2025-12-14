import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { generateInvoicePDF } from '../../lib/pdfGenerator';
import styles from './InvoiceList.module.css';

export default function InvoiceList() {
  const router = useRouter();
  const [invoices, setInvoices] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const savedInvoices = JSON.parse(localStorage.getItem('invoices') || '[]');
    setInvoices(savedInvoices);
  }, []);

  const getStatusClass = (status) => {
    const statusMap = {
      Paid: styles.statusPaid,
      Pending: styles.statusPending,
      Overdue: styles.statusOverdue,
    };
    return statusMap[status] || '';
  };

  const handleDownload = (invoice) => {
    generateInvoicePDF(invoice);
  };

  const handleDelete = (invoiceNumber) => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      const updatedInvoices = invoices.filter(inv => inv.invoiceNumber !== invoiceNumber);
      setInvoices(updatedInvoices);
      localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
    }
  };

  const filteredInvoices = filter === 'All' 
    ? invoices 
    : invoices.filter(inv => inv.status === filter);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Invoices</h2>
        <button 
          className={styles.createBtn}
          onClick={() => router.push('/admin/create-invoice')}
        >
          + Create Invoice
        </button>
      </div>

      {/* Filter Tabs */}
      <div className={styles.filters}>
        {['All', 'Pending', 'Paid', 'Overdue'].map(status => (
          <button
            key={status}
            className={`${styles.filterBtn} ${filter === status ? styles.active : ''}`}
            onClick={() => setFilter(status)}
          >
            {status}
            {status === 'All' && ` (${invoices.length})`}
            {status !== 'All' && ` (${invoices.filter(i => i.status === status).length})`}
          </button>
        ))}
      </div>

      {/* Invoices Table */}
      <div className={styles.tableContainer}>
        {filteredInvoices.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No invoices found</p>
            <button 
              className={styles.createBtn}
              onClick={() => router.push('/admin/create-invoice')}
            >
              Create Your First Invoice
            </button>
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Due Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map(invoice => (
                <tr key={invoice.invoiceNumber}>
                  <td className={styles.invoiceNumber}>{invoice.invoiceNumber}</td>
                  <td>{invoice.customerName}</td>
                  <td>{invoice.date}</td>
                  <td>{invoice.dueDate}</td>
                  <td className={styles.amount}>${invoice.total.toFixed(2)}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${getStatusClass(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button
                        className={styles.actionBtn}
                        onClick={() => handleDownload(invoice)}
                        title="Download PDF"
                      >
                        📥
                      </button>
                      <button
                        className={styles.actionBtn}
                        onClick={() => handleDelete(invoice.invoiceNumber)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}