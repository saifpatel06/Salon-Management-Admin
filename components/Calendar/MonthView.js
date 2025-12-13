import styles from './MonthView.module.css';

export default function MonthView({ currentDate, appointments, barberColors, onDateClick }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getAppointmentsForDate = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return appointments.filter(apt => apt.date === dateStr);
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const calendarDays = [];
  
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className={styles.calendarDayEmpty}></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayAppointments = getAppointmentsForDate(day);
    const isTodayDate = isToday(day);

    // Group appointments by barber
    const barberGroups = {};
    dayAppointments.forEach(apt => {
      if (!barberGroups[apt.barber]) {
        barberGroups[apt.barber] = [];
      }
      barberGroups[apt.barber].push(apt);
    });

    calendarDays.push(
      <div
        key={day}
        className={`${styles.calendarDay} ${isTodayDate ? styles.today : ''}`}
        onClick={() => {
          const clickedDate = new Date(year, month, day);
          onDateClick(clickedDate);
        }}
      >
        <div className={styles.dayNumber}>{day}</div>
        
        {dayAppointments.length > 0 && (
          <div className={styles.appointmentsContainer}>
            {Object.entries(barberGroups).map(([barber, apts]) => (
              <div
                key={barber}
                className={styles.barberAppointment}
                style={{ 
                  backgroundColor: barberColors[barber] || '#6c757d',
                }}
                title={`${barber}: ${apts.length} appointment${apts.length > 1 ? 's' : ''}`}
              >
                <span className={styles.appointmentCount}>{apts.length}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.monthView}>
      <div className={styles.dayNames}>
        {dayNames.map(day => (
          <div key={day} className={styles.dayName}>
            {day}
          </div>
        ))}
      </div>

      <div className={styles.calendarGrid}>
        {calendarDays}
      </div>
    </div>
  );
}