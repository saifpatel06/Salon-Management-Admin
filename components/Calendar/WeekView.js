import styles from './WeekView.module.css';

export default function WeekView({ currentDate, appointments, barberColors, onAppointmentClick }) {
  const weekStart = new Date(currentDate);
  weekStart.setDate(currentDate.getDate() - currentDate.getDay());
  
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + i);
    weekDays.push(day);
  }

  const timeSlots = [];
  for (let hour = 8; hour <= 20; hour++) {
    timeSlots.push(hour);
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
    return date.toDateString() === today.toDateString();
  };

  const formatTime = (hour) => {
    if (hour === 0) return '12 AM';
    if (hour === 12) return '12 PM';
    return hour > 12 ? `${hour - 12} PM` : `${hour} AM`;
  };

  return (
    <div className={styles.weekView}>
      <div className={styles.timeColumn}>
        <div className={styles.timeHeader}></div>
        {timeSlots.map(hour => (
          <div key={hour} className={styles.timeSlot}>
            {formatTime(hour)}
          </div>
        ))}
      </div>

      {weekDays.map(day => (
        <div key={day.toISOString()} className={styles.dayColumn}>
          <div className={`${styles.dayHeader} ${isToday(day) ? styles.todayHeader : ''}`}>
            <div className={styles.dayName}>
              {day.toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
            <div className={`${styles.dayDate} ${isToday(day) ? styles.todayDate : ''}`}>
              {day.getDate()}
            </div>
          </div>

          {timeSlots.map(hour => {
            const slotAppointments = getAppointmentsForDateTime(day, hour);
            return (
              <div key={hour} className={styles.appointmentSlot}>
                {slotAppointments.map(apt => (
                  <div
                    key={apt.id}
                    className={styles.appointmentCard}
                    style={{ borderLeftColor: barberColors[apt.barber] }}
                    onClick={() => onAppointmentClick(apt)}
                  >
                    <div className={styles.cardTime}>{apt.time}</div>
                    <div className={styles.cardCustomer}>{apt.customerName}</div>
                    <div className={styles.cardService}>{apt.service}</div>
                    <div className={styles.cardBarber}>{apt.barber}</div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}