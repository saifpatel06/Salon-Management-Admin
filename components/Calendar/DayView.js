import styles from './DayView.module.css';

export default function DayView({ currentDate, appointments, barberColors, barbers, onAppointmentClick }) {
  // Time slots (8 AM to 9 PM)
  const timeSlots = [];
  for (let hour = 8; hour <= 21; hour++) {
    timeSlots.push({
      hour,
      label: hour > 12 ? `${hour - 12}:00 PM` : hour === 12 ? '12:00 PM' : `${hour}:00 AM`,
    });
  }

  const dateStr = currentDate.toISOString().split('T')[0];
  const dayAppointments = appointments.filter(apt => apt.date === dateStr);

  // Group appointments by barber and time
  const barberSchedules = {};
  barbers.forEach(barber => {
    barberSchedules[barber.name] = {};
    timeSlots.forEach(slot => {
      barberSchedules[barber.name][slot.hour] = [];
    });
  });

  dayAppointments.forEach(apt => {
    const aptHour = parseInt(apt.time.split(':')[0]);
    const aptPeriod = apt.time.includes('PM') ? 'PM' : 'AM';
    let aptHour24 = aptHour;
    if (aptPeriod === 'PM' && aptHour !== 12) aptHour24 += 12;
    if (aptPeriod === 'AM' && aptHour === 12) aptHour24 = 0;

    if (barberSchedules[apt.barber] && barberSchedules[apt.barber][aptHour24]) {
      barberSchedules[apt.barber][aptHour24].push(apt);
    }
  });

  return (
    <div className={styles.dayView}>
      <div className={styles.dayGrid}>
        {/* Header Row */}
        <div className={styles.headerRow}>
          <div className={styles.timeHeaderCell}>Time</div>
          {barbers.map(barber => (
            <div 
              key={barber.id} 
              className={styles.barberHeaderCell}
              style={{ borderTopColor: barberColors[barber.name] || '#6c757d' }}
            >
              <div className={styles.barberName}>{barber.name}</div>
              <div className={styles.barberSpecialty}>{barber.specialization}</div>
            </div>
          ))}
        </div>

        {/* Time Rows */}
        {timeSlots.map(slot => (
          <div key={slot.hour} className={styles.timeRow}>
            <div className={styles.timeCell}>{slot.label}</div>
            
            {barbers.map(barber => {
              const slotAppointments = barberSchedules[barber.name][slot.hour] || [];
              const hasAppointment = slotAppointments.length > 0;
              
              return (
                <div 
                  key={barber.id} 
                  className={`${styles.appointmentSlot} ${!hasAppointment ? styles.available : ''}`}
                >
                  {hasAppointment ? (
                    slotAppointments.map(apt => (
                      <div
                        key={apt.id}
                        className={styles.appointmentCard}
                        style={{ 
                          backgroundColor: barberColors[barber.name] || '#6c757d',
                          borderLeftColor: barberColors[barber.name] || '#6c757d',
                        }}
                        onClick={() => onAppointmentClick && onAppointmentClick(apt)}
                      >
                        <div className={styles.appointmentHeader}>
                          <span className={styles.appointmentTime}>🕐 {apt.time}</span>
                          <span className={`${styles.appointmentStatus} ${styles[apt.status.toLowerCase()]}`}>
                            {apt.status}
                          </span>
                        </div>
                        <div className={styles.appointmentCustomer}>
                          👤 {apt.customerName}
                        </div>
                        <div className={styles.appointmentService}>
                          ✂️ {apt.service}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className={styles.availableSlot}>
                      Available
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}