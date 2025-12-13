import styles from './DayView.module.css';

export default function DayView({ currentDate, appointments, barbers, barberColors, onAppointmentClick }) {
  const timeSlots = [];
  for (let hour = 8; hour <= 20; hour++) {
    timeSlots.push(hour);
  }

  const dateStr = currentDate.toISOString().split('T')[0];
  const dayAppointments = appointments.filter(apt => apt.date === dateStr);

  const formatTime = (hour) => {
    if (hour === 0) return '12 AM';
    if (hour === 12) return '12 PM';
    return hour > 12 ? `${hour - 12} PM` : `${hour} AM`;
  };

  const getAppointmentsForBarberAndTime = (barber, hour) => {
    return dayAppointments.filter(apt => {
      if (apt.barber !== barber) return false;
      const aptHour = parseInt(apt.time.split(':')[0]);
      const aptPeriod = apt.time.includes('PM') ? 'PM' : 'AM';
      let aptHour24 = aptHour;
      if (aptPeriod === 'PM' && aptHour !== 12) aptHour24 += 12;
      if (aptPeriod === 'AM' && aptHour === 12) aptHour24 = 0;
      return aptHour24 === hour;
    });
  };

  return (
    <div className={styles.dayView}>
      <div className={styles.gridContainer}>
        <div className={styles.timeColumn}>
          <div className={styles.cornerCell}></div>
          {timeSlots.map(hour => (
            <div key={hour} className={styles.timeCell}>
              {formatTime(hour)}
            </div>
          ))}
        </div>

        {barbers.map(barber => (
          <div key={barber.id} className={styles.barberColumn}>
            <div className={styles.barberHeader}>
              <div 
                className={styles.barberDot}
                style={{ backgroundColor: barberColors[barber.name] }}
              />
              <div>
                <div className={styles.barberName}>{barber.name}</div>
                <div className={styles.barberSpecialty}>{barber.specialization}</div>
              </div>
            </div>

            {timeSlots.map(hour => {
              const slotAppointments = getAppointmentsForBarberAndTime(barber.name, hour);
              const hasAppointment = slotAppointments.length > 0;

              return (
                <div key={hour} className={styles.timeSlot}>
                  {hasAppointment ? (
                    slotAppointments.map(apt => (
                      <div
                        key={apt.id}
                        className={styles.appointmentCard}
                        style={{ borderLeftColor: barberColors[barber.name] }}
                        onClick={() => onAppointmentClick(apt)}
                      >
                        <div className={styles.aptTime}>{apt.time}</div>
                        <div className={styles.aptCustomer}>{apt.customerName}</div>
                        <div className={styles.aptService}>{apt.service}</div>
                        <div className={`${styles.aptStatus} ${styles[apt.status.toLowerCase()]}`}>
                          {apt.status}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className={styles.emptySlot}>Available</div>
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