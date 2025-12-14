import { generateInvoicePDF } from '../../lib/pdfGenerator';
import styles from './InvoicePreview.module.css';

export default function InvoicePreview({ invoice, onClose }) {
  const handleDownload = () => {
    generateInvoicePDF(invoice);
  };

  const getStatusClass = (status) => {
    const statusMap = {
      Paid: styles.statusPaid,
      Pending: styles.statusPending,
      Overdue: styles.statusOverdue,
    };
    return statusMap[status] || '';
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Invoice Preview</h2>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>

        <div className={styles.modalBody}>
          {/* Invoice Preview */}
          <div className={styles.invoice}>
            {/* Header */}
            <div className={styles.invoiceHeader}>
              <div>
                <h1 className={styles.invoiceTitle}>INVOICE</h1>
              </div>
              <div className={styles.salonInfo}>
                <div className={styles.salonName}>Salon Admin</div>
                <div className={styles.salonDetails}>123 Main Street</div>
                <div className={styles.salonDetails}>City, State 12345</div>
                <div className={styles.salonDetails}>Phone: (555) 123-4567</div>
              </div>
            </div>

            {/* Invoice Details */}
            <div className={styles.detailsSection}>
              <div className={styles.detailsGrid}>
                <div>
                  <div className={styles.detailLabel}>Invoice Number:</div>
                  <div className={styles.detailValue}>{invoice.invoiceNumber}</div>
                </div>
                <div>
                  <div className={styles.detailLabel}>Date:</div>
                  <div className={styles.detailValue}>{invoice.date}</div>
                </div>
                <div>
                  <div className={styles.detailLabel}>Due Date:</div>
                  <div className={styles.detailValue}>{invoice.dueDate}</div>
                </div>
                <div>
                  <div className={styles.detailLabel}>Status:</div>
                  <span className={`${styles.statusBadge} ${getStatusClass(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div className={styles.customerSection}>
              <div className={styles.sectionTitle}>Bill To:</div>
              <div className={styles.customerName}>{invoice.customerName}</div>
              {invoice.customerEmail && (
                <div className={styles.customerDetail}>{invoice.customerEmail}</div>
              )}
              {invoice.customerPhone && (
                <div className={styles.customerDetail}>{invoice.customerPhone}</div>
              )}
            </div>

            {/* Services Table */}
            <table className={styles.servicesTable}>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Barber</th>
                  <th>Duration</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {invoice.services.map((service, index) => (
                  <tr key={index}>
                    <td>{service.name}</td>
                    <td>{service.barber}</td>
                    <td>{service.duration} min</td>
                    <td>${service.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div className={styles.totalsSection}>
              <div className={styles.totalsBox}>
                <div className={styles.totalRow}>
                  <span>Subtotal:</span>
                  <span>${invoice.subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Tax ({invoice.taxRate}%):</span>
                  <span>${invoice.tax.toFixed(2)}</span>
                </div>
                <div className={`${styles.totalRow} ${styles.totalFinal}`}>
                  <span>Total:</span>
                  <span>${invoice.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Notes */}
            {invoice.notes && (
              <div className={styles.notesSection}>
                <div className={styles.sectionTitle}>Notes:</div>
                <div className={styles.notesText}>{invoice.notes}</div>
              </div>
            )}

            {/* Footer */}
            <div className={styles.invoiceFooter}>
              <p>Thank you for your business!</p>
              <p>For questions, contact us at info@salonadmin.com</p>
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.downloadBtn} onClick={handleDownload}>
            📥 Download PDF
          </button>
          <button className={styles.closeFooterBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}