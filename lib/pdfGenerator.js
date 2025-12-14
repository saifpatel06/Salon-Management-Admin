export const generateInvoicePDF = (invoice) => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Colors
  const primaryColor = '#0078d4';
  const textColor = '#323130';
  const lightGray = '#f3f2f1';

  // Header
  doc.setFillColor(0, 120, 212);
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont(undefined, 'bold');
  doc.text('INVOICE', 20, 25);

  // Salon Info
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  doc.text('Salon Admin', 150, 15);
  doc.text('123 Main Street', 150, 20);
  doc.text('City, State 12345', 150, 25);
  doc.text('Phone: (555) 123-4567', 150, 30);

  // Invoice Details
  doc.setTextColor(textColor);
  doc.setFontSize(10);
  doc.setFont(undefined, 'bold');
  doc.text('Invoice Number:', 20, 50);
  doc.text('Date:', 20, 56);
  doc.text('Due Date:', 20, 62);

  doc.setFont(undefined, 'normal');
  doc.text(invoice.invoiceNumber, 60, 50);
  doc.text(invoice.date, 60, 56);
  doc.text(invoice.dueDate, 60, 62);

  // Customer Info
  doc.setFillColor(243, 242, 241);
  doc.rect(20, 70, 170, 25, 'F');

  doc.setFont(undefined, 'bold');
  doc.text('Bill To:', 25, 78);
  doc.setFont(undefined, 'normal');
  doc.text(invoice.customerName, 25, 84);
  doc.text(invoice.customerEmail || '', 25, 90);
  doc.text(invoice.customerPhone || '', 25, 96);

  // Table Header
  const tableTop = 105;
  doc.setFillColor(0, 120, 212);
  doc.rect(20, tableTop, 170, 10, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont(undefined, 'bold');
  doc.setFontSize(10);
  doc.text('Service', 25, tableTop + 7);
  doc.text('Barber', 80, tableTop + 7);
  doc.text('Price', 140, tableTop + 7);
  doc.text('Duration', 165, tableTop + 7);

  // Table Rows
  doc.setTextColor(textColor);
  doc.setFont(undefined, 'normal');
  let yPos = tableTop + 15;

  invoice.services.forEach((service, index) => {
    if (index % 2 === 0) {
      doc.setFillColor(249, 249, 249);
      doc.rect(20, yPos - 5, 170, 10, 'F');
    }

    doc.text(service.name, 25, yPos);
    doc.text(service.barber, 80, yPos);
    doc.text(`$${service.price.toFixed(2)}`, 140, yPos);
    doc.text(`${service.duration} min`, 165, yPos);

    yPos += 10;
  });

  // Totals
  yPos += 10;
  doc.setDrawColor(200, 200, 200);
  doc.line(120, yPos, 190, yPos);

  yPos += 8;
  doc.setFont(undefined, 'normal');
  doc.text('Subtotal:', 120, yPos);
  doc.text(`$${invoice.subtotal.toFixed(2)}`, 165, yPos, { align: 'right' });

  yPos += 8;
  doc.text(`Tax (${invoice.taxRate}%):`, 120, yPos);
  doc.text(`$${invoice.tax.toFixed(2)}`, 165, yPos, { align: 'right' });

  yPos += 8;
  doc.setFont(undefined, 'bold');
  doc.setFontSize(12);
  doc.text('Total:', 120, yPos);
  doc.text(`$${invoice.total.toFixed(2)}`, 165, yPos, { align: 'right' });

  // Payment Status
  yPos += 15;
  doc.setFontSize(10);
  doc.setFont(undefined, 'bold');
  doc.text('Payment Status:', 20, yPos);
  
  const statusColors = {
    Paid: [16, 124, 16],
    Pending: [193, 156, 0],
    Overdue: [164, 38, 44],
  };
  
  const statusColor = statusColors[invoice.status] || [96, 94, 92];
  doc.setFillColor(...statusColor);
  doc.rect(60, yPos - 5, 30, 8, 'F');
  doc.setTextColor(255, 255, 255);
  doc.text(invoice.status, 62, yPos);

  // Notes
  if (invoice.notes) {
    yPos += 15;
    doc.setTextColor(textColor);
    doc.setFont(undefined, 'bold');
    doc.text('Notes:', 20, yPos);
    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    
    const splitNotes = doc.splitTextToSize(invoice.notes, 170);
    doc.text(splitNotes, 20, yPos + 6);
  }

  // Footer
  const pageHeight = doc.internal.pageSize.height;
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Thank you for your business!', 105, pageHeight - 20, { align: 'center' });
  doc.text('For questions, contact us at info@salonadmin.com', 105, pageHeight - 15, { align: 'center' });

  // Save PDF
  doc.save(`Invoice-${invoice.invoiceNumber}.pdf`);
};