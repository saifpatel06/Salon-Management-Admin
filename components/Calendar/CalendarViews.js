import { useState } from 'react';
import MonthView from './MonthView';
import WeekView from './WeekView';
import DayView from './DayView';
import styles from './CalendarViews.module.css';

export default function CalendarViews({ appointments, barbers, onAppointmentClick }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month'); // 'month', 'week', 'day'
  const [selectedBarbers, setSelectedBarbers] = useState([]);

  // Barber color mapping
  const barberColors = {
    'John Smith': '#3b82f6',      // Blue
    'Maria Garcia': '#ec4899',    // Pink
    'David Lee': '#10b981',       // Green
    'Sarah Johnson': '#f59e0b',   // Orange
    'Mike Wilson': '#8b5cf6',     // Purple
  };

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

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const toggleBarberFilter = (barberName) => {
    setSelectedBarbers(prev => 
      prev.includes(barberName)
        ? prev.filter(b => b !== barberName)
        : [...prev, barberName]
    );
  };

  const clearFilters = () => {
    setSelectedBarbers([]);
  };

  // Filter appointments by selected barbers
  const filteredAppointments = selectedBarbers.length > 0
    ? appointments.filter(apt => selectedBarbers.includes(apt.barber))
    : appointments;

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
    } else if (viewMode === 'day') {
      return currentDate.toLocaleDateString('en-US', { 
        weekday: 'long',
        month: 'long', 
        day: 'numeric',
        year: 'numeric' 
      });
    }
  };

  return (
    <div className={styles.calendarContainer}>
      {/* Header Controls */}
      <div className={styles.calendarHeader}>
        <div className={styles.headerLeft}>
          <button className={styles.todayButton} onClick={goToToday}>
            Today
          </button>
          <div className={styles.navButtons}>
            <button className={styles.navButton} onClick={() => navigate(-1)}>
              ‹
            </button>
            <button className={styles.navButton} onClick={() => navigate(1)}>
              ›
            </button>
          </div>
          <h2 className={styles.viewTitle}>{getViewTitle()}</h2>
        </div>

        {/* View Mode Toggle */}
        <div className={styles.viewToggle}>
          <button
            className={`${styles.viewButton} ${viewMode === 'month' ? styles.active : ''}`}
            onClick={() => setViewMode('month')}
          >
            Month
          </button>
          <button
            className={`${styles.viewButton} ${viewMode === 'week' ? styles.active : ''}`}
            onClick={() => setViewMode('week')}
          >
            Week
          </button>
          <button
            className={`${styles.viewButton} ${viewMode === 'day' ? styles.active : ''}`}
            onClick={() => setViewMode('day')}
          >
            Day
          </button>
        </div>
      </div>

      {/* Barber Filter */}
      <div className={styles.barberFilter}>
        <div className={styles.filterLabel}>Filter by Barber:</div>
        <div className={styles.barberChips}>
          {barbers.map(barber => (
            <button
              key={barber.id}
              className={`${styles.barberChip} ${
                selectedBarbers.includes(barber.name) ? styles.chipActive : ''
              }`}
              style={{
                '--barber-color': barberColors[barber.name] || '#6c757d',
              }}
              onClick={() => toggleBarberFilter(barber.name)}
            >
              <span 
                className={styles.barberDot}
                style={{ backgroundColor: barberColors[barber.name] || '#6c757d' }}
              />
              {barber.name}
            </button>
          ))}
          {selectedBarbers.length > 0 && (
            <button className={styles.clearFilter} onClick={clearFilters}>
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Statistics Bar */}
      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{filteredAppointments.length}</span>
          <span className={styles.statLabel}>Total Appointments</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>
            {filteredAppointments.filter(a => a.status === 'Confirmed').length}
          </span>
          <span className={styles.statLabel}>Confirmed</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>
            {filteredAppointments.filter(a => a.status === 'Pending').length}
          </span>
          <span className={styles.statLabel}>Pending</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>
            {new Set(filteredAppointments.map(a => a.barber)).size}
          </span>
          <span className={styles.statLabel}>Active Barbers</span>
        </div>
      </div>

      {/* Calendar Views */}
      <div className={styles.calendarView}>
        {viewMode === 'month' && (
          <MonthView
            currentDate={currentDate}
            appointments={filteredAppointments}
            barberColors={barberColors}
            onDateClick={(date) => {
              setCurrentDate(date);
              setViewMode('day');
            }}
          />
        )}
        
        {viewMode === 'week' && (
          <WeekView
            currentDate={currentDate}
            appointments={filteredAppointments}
            barberColors={barberColors}
            onAppointmentClick={onAppointmentClick}
          />
        )}
        
        {viewMode === 'day' && (
          <DayView
            currentDate={currentDate}
            appointments={filteredAppointments}
            barberColors={barberColors}
            barbers={barbers}
            onAppointmentClick={onAppointmentClick}
          />
        )}
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendTitle}>Barber Colors:</div>
        <div className={styles.legendItems}>
          {barbers.map(barber => (
            <div key={barber.id} className={styles.legendItem}>
              <span
                className={styles.legendDot}
                style={{ backgroundColor: barberColors[barber.name] || '#6c757d' }}
              />
              <span>{barber.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}