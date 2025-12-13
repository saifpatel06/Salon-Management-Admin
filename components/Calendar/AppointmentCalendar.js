import { useState } from 'react';
import styles from './AppointmentCalendar.module.css';

export default function AppointmentCalendar({ appointments, onDateClick, onAppointmentClick }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get calendar data
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Navigate months
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Get appointments for a specific date
  const getAppointmentsForDate = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return appointments.filter(apt => apt.date === dateStr);
  };

  // Check if date is today
  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  // Generate calendar days
  const calendarDays = [];
  
  // Empty cells before month starts
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className={styles.calendarDayEmpty}></div>);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayAppointments = getAppointmentsForDate(day);
    const hasAppointments = dayAppointments.length > 0;
    const isTodayDate = isToday(day);

    calendarDays.push(
      <div
        key={day}
        className={`${styles.calendarDay} ${isTodayDate ? styles.today : ''} ${
          hasAppointments ? styles.hasAppointments : ''
        }`}
        onClick={() => onDateClick && onDateClick(day, month, year)}
      >
        <div className={styles.dayNumber}>{day}</div>
        {hasAppointments && (
          <div className={styles.appointmentIndicator}>
            <span className={styles.appointmentCount}>{dayAppointments.length}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.calendarContainer}>
      {/* Calendar Header */}
      <div className={styles.calendarHeader}>
        <button className={styles.navButton} onClick={prevMonth}>
          ‹
        </button>
        <div className={styles.monthYear}>
          <h3>{monthNames[month]} {year}</h3>
        </div>
        <button className={styles.navButton} onClick={nextMonth}>
          ›
        </button>
      </div>

      <button className={styles.todayButton} onClick={goToToday}>
        Today
      </button>

      {/* Day Names */}
      <div className={styles.dayNames}>
        {dayNames.map(day => (
          <div key={day} className={styles.dayName}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className={styles.calendarGrid}>
        {calendarDays}
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.todayDot}`}></span>
          <span>Today</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.appointmentDot}`}></span>
          <span>Has Appointments</span>
        </div>
      </div>
    </div>
  );
}