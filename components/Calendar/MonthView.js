import styles from './MonthView.module.css';

export default function MonthView({ currentDate, appointments, barberColors, onDateClick, onAppointmentClick }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getAppointmentsForDate = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return appointments.filter(apt => apt.date === dateStr);
  };

  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  const calendarDays = [];
  
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayAppointments = getAppointmentsForDate(day);
    const isTodayDate = isToday(day);

    calendarDays.push(
      <div
        key={day}
        className={`${styles.dayCell} ${isTodayDate ? styles.today : ''}`}
        onClick={() => onDateClick(new Date(year, month, day))}
      >
        <div className={styles.dayNumber}>{day}</div>
        <div className={styles.appointmentsList}>
          {dayAppointments.slice(0, 3).map((apt) => (
            <div
              key={apt.id}
              className={styles.appointmentItem}
              style={{ borderLeftColor: barberColors[apt.barber] }}
              onClick={(e) => {
                e.stopPropagation();
                onAppointmentClick(apt);
              }}
            >
              <span className={styles.appointmentTime}>{apt.time}</span>
              <span className={styles.appointmentCustomer}>{apt.customerName}</span>
            </div>
          ))}
          {dayAppointments.length > 3 && (
            <div className={styles.moreAppointments}>
              +{dayAppointments.length - 3} more
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.monthView}>
      <div className={styles.dayHeaders}>
        {dayNames.map(day => (
          <div key={day} className={styles.dayHeader}>{day}</div>
        ))}
      </div>
      <div className={styles.calendarGrid}>
        {calendarDays}
      </div>
    </div>
  );
}