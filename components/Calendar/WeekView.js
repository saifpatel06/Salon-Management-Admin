import styles from './WeekView.module.css';

export default function WeekView({ currentDate, appointments, barberColors, onAppointmentClick }) {
  // Get week dates
  const weekStart = new Date(currentDate);
  weekStart.setDate(currentDate.getDate() - currentDate.getDay());
  
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + i);
    weekDays.push(day);
  }

  // Time slots (9 AM to 8 PM)
  const timeSlots = [];
  for (let hour = 9; hour <= 20; hour++) {
    timeSlots.push({
      hour,
      label: hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`,
    });
  }

  const getAppointmentsForDateTime = (date, hour) => {
    const dateStr = date.toISOString().split('T')[0];
    return appointments.filter(apt => {
      if (apt.date !== dateStr) return false;
      const aptHour = parseInt(apt.time.split(':')[0]);
      const aptPeriod = apt.time.includes('PM') ? 'PM' : 'AM';
      let aptHour24 = aptHour;
      if (aptPeriod === 'PM' && aptHour !== 12) aptHour24 += 12;
      if (aptPeriod === 'AM' && aptHour === 12) aptHour24 = 0;
      return aptHour24 === hour;
    });
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className={styles.weekView}>
      <div className={styles.weekGrid}>
        {/* Time Column */}
        <div className={styles.timeColumn}>
          <div className={styles.timeHeaderCell}></div>
          {timeSlots.map(slot => (
            <div key={slot.hour} className={styles.timeCell}>
              {slot.label}
            </div>
          ))}
        </div>

        {/* Day Columns */}
        {weekDays.map(day => (
          <div key={day.toISOString()} className={styles.dayColumn}>
            <div className={`${styles.dayHeader} ${isToday(day) ? styles.todayHeader : ''}`}>
              <div className={styles.dayName}>
                {day.toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div className={styles.dayDate}>
                {day.getDate()}
              </div>
            </div>

            {timeSlots.map(slot => {
              const slotAppointments = getAppointmentsForDateTime(day, slot.hour);
              
              return (
                <div key={slot.hour} className={styles.timeSlot}>
                  {slotAppointments.map(apt => (
                    <div
                      key={apt.id}
                      className={styles.appointmentCard}
                      style={{ 
                        backgroundColor: barberColors[apt.barber] || '#6c757d',
                      }}
                      onClick={() => onAppointmentClick && onAppointmentClick(apt)}
                    >
                      <div className={styles.appointmentTime}>{apt.time}</div>
                      <div className={styles.appointmentCustomer}>{apt.customerName}</div>
                      <div className={styles.appointmentService}>{apt.service}</div>
                      <div className={styles.appointmentBarber}>👨‍💼 {apt.barber}</div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}