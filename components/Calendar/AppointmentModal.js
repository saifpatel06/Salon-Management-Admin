import styles from './AppointmentModal.module.css';

export default function AppointmentModal({ appointment, barberColor, onClose }) {
  const getStatusClass = (status) => {
    const statusMap = {
      Confirmed: styles.confirmed,
      Pending: styles.pending,
      Completed: styles.completed,
      Cancelled: styles.cancelled,
    };
    return statusMap[status] || '';
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header} style={{ borderLeftColor: barberColor }}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>Appointment Details</h2>
            <span className={`${styles.statusBadge} ${getStatusClass(appointment.status)}`}>
              {appointment.status}
            </span>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>

        <div className={styles.body}>
          <div className={styles.infoSection}>
            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>👤</div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Customer</div>
                <div className={styles.infoValue}>{appointment.customerName}</div>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>👨‍💼</div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Barber</div>
                <div className={styles.infoValue}>{appointment.barber}</div>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>✂️</div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Service</div>
                <div className={styles.infoValue}>{appointment.service}</div>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>📅</div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Date</div>
                <div className={styles.infoValue}>
                  {new Date(appointment.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>🕐</div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Time</div>
                <div className={styles.infoValue}>{appointment.time}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.actionBtn} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}