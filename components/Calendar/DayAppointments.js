import styles from './DayAppointments.module.css';

export default function DayAppointments({ date, appointments, onClose, onAppointmentClick }) {
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusClass = (status) => {
    const statusMap = {
      Confirmed: styles.statusConfirmed,
      Pending: styles.statusPending,
      Completed: styles.statusCompleted,
      Cancelled: styles.statusCancelled,
    };
    return statusMap[status] || styles.statusDefault;
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h3>Appointments</h3>
            <p className={styles.dateText}>{formatDate(date)}</p>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.modalBody}>
          {appointments.length === 0 ? (
            <div className={styles.noAppointments}>
              <p>📅 No appointments for this day</p>
            </div>
          ) : (
            <div className={styles.appointmentsList}>
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className={styles.appointmentCard}
                  onClick={() => onAppointmentClick && onAppointmentClick(appointment)}
                >
                  <div className={styles.timeSlot}>
                    <span className={styles.timeIcon}>🕐</span>
                    <span className={styles.time}>{appointment.time}</span>
                  </div>
                  
                  <div className={styles.appointmentDetails}>
                    <h4>{appointment.customerName}</h4>
                    <div className={styles.detailRow}>
                      <span className={styles.icon}>👨‍💼</span>
                      <span>{appointment.barber}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.icon}>✂️</span>
                      <span>{appointment.service}</span>
                    </div>
                  </div>

                  <div className={styles.statusBadge}>
                    <span className={`${styles.badge} ${getStatusClass(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}