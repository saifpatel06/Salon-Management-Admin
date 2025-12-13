import { useState } from 'react';
import MonthView from './MonthView';
import WeekView from './WeekView';
import DayView from './DayView';
import AppointmentModal from './AppointmentModal';
import styles from './CalendarContainer.module.css';

export default function CalendarContainer({ appointments, barbers }) {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1)); // December 2025
  const [viewMode, setViewMode] = useState('month'); // 'month', 'week', 'day'
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const barberColors = {
    'John Smith': '#0078d4',
    'Maria Garcia': '#c239b3',
    'David Lee': '#00b294',
    'Sarah Johnson': '#ff8c00',
    'Mike Wilson': '#8764b8',
  };

  // Navigation
  const navigate = (direction) => {
    const newDate = new Date(currentDate);
    if (viewMode === 'month') {
      newDate.setMonth(currentDate.getMonth() + direction);
    } else if (viewMode === 'week') {
      newDate.setDate(currentDate.getDate() + (direction * 7));
    } else if (viewMode === 'day') {
      newDate.setDate(currentDate.getDate() + direction);
    }
    setCurrentDate(newDate);
  };

  const goToToday = () => setCurrentDate(new Date());

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  const handleDateClick = (date) => {
    setCurrentDate(date);
    setViewMode('day');
  };

  // Get title based on view
  const getViewTitle = () => {
    const options = { month: 'long', year: 'numeric' };
    
    if (viewMode === 'month') {
      return currentDate.toLocaleDateString('en-US', options);
    } else if (viewMode === 'week') {
      const weekStart = new Date(currentDate);
      weekStart.setDate(currentDate.getDate() - currentDate.getDay());
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      
      return `${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
    } else {
      return currentDate.toLocaleDateString('en-US', { 
        weekday: 'long',
        month: 'long', 
        day: 'numeric',
        year: 'numeric' 
      });
    }
  };

  return (
    <div className={styles.container}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <button className={styles.todayBtn} onClick={goToToday}>
            Today
          </button>
          <div className={styles.navButtons}>
            <button className={styles.navBtn} onClick={() => navigate(-1)}>
              <span>‹</span>
            </button>
            <button className={styles.navBtn} onClick={() => navigate(1)}>
              <span>›</span>
            </button>
          </div>
          <h2 className={styles.viewTitle}>{getViewTitle()}</h2>
        </div>

        {/* View Switcher */}
        <div className={styles.viewSwitcher}>
          <button
            className={`${styles.viewBtn} ${viewMode === 'month' ? styles.active : ''}`}
            onClick={() => setViewMode('month')}
          >
            Month
          </button>
          <button
            className={`${styles.viewBtn} ${viewMode === 'week' ? styles.active : ''}`}
            onClick={() => setViewMode('week')}
          >
            Week
          </button>
          <button
            className={`${styles.viewBtn} ${viewMode === 'day' ? styles.active : ''}`}
            onClick={() => setViewMode('day')}
          >
            Day
          </button>
        </div>
      </div>

      {/* Calendar Views */}
      <div className={styles.calendarContent}>
        {viewMode === 'month' && (
          <MonthView
            currentDate={currentDate}
            appointments={appointments}
            barberColors={barberColors}
            onDateClick={handleDateClick}
            onAppointmentClick={handleAppointmentClick}
          />
        )}

        {viewMode === 'week' && (
          <WeekView
            currentDate={currentDate}
            appointments={appointments}
            barberColors={barberColors}
            onAppointmentClick={handleAppointmentClick}
          />
        )}

        {viewMode === 'day' && (
          <DayView
            currentDate={currentDate}
            appointments={appointments}
            barbers={barbers}
            barberColors={barberColors}
            onAppointmentClick={handleAppointmentClick}
          />
        )}
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <span className={styles.legendTitle}>Barbers:</span>
        {barbers.map(barber => (
          <div key={barber.id} className={styles.legendItem}>
            <span 
              className={styles.legendDot} 
              style={{ backgroundColor: barberColors[barber.name] }}
            />
            <span>{barber.name}</span>
          </div>
        ))}
      </div>

      {/* Appointment Detail Modal */}
      {showModal && selectedAppointment && (
        <AppointmentModal
          appointment={selectedAppointment}
          barberColor={barberColors[selectedAppointment.barber]}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}