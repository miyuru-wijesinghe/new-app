import { useState, useEffect } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import img1 from '../../assets/character.png';
import zoom from '../../assets/icons/zoom.png';
import time from '../../assets/icons/time.png';
import '@fontsource/roboto';
import './ConsultationScheduler.scss';

const ConsultationScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const availableTimes = ['09:00 am', '11:00 am', '01:00 pm', '03:00 pm'];

  const handleDateChange: CalendarProps['onChange'] = (date) => {
    console.log("handleDateChange called with:", date);

    if (Array.isArray(date) && date.length > 0) {
      setSelectedDate(date[0]);
    } else if (date instanceof Date) {
      setSelectedDate(date);
    } else {
      setSelectedDate(null);
    }
    setSelectedTime(null);
  };

  useEffect(() => {
    console.log("Updated selectedDate:", selectedDate);
  }, [selectedDate]);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="consultation-scheduler">
      <h1>Online Consultation</h1>
      <div className="main-container">
        <div className="profile-card">
          <div className="profile-picture">
            <img src={img1} alt="Profile" />
          </div>
          <h3>Madhava J</h3>
          <h6>Patient Check-in</h6>
          <div className="details">
            <p><img src={time} alt="Duration" /> 30 mins</p>
            <p><img src={zoom} alt="Zoom" /> Zoom</p>
          </div>
        </div>
        <div className="calendar-section">
          <h3>Select a Date & Time</h3>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="my-calendar"
            selectRange={false}
          />
        </div>
        <div className="time-selector">
          <h3>{selectedDate ? selectedDate.toDateString() : 'Select a Date'}</h3>
          {availableTimes.map((time) => (
            <div key={time} className="time-slot">
              <button
                onClick={() => handleTimeSelect(time)}
                className={selectedTime === time ? 'active' : ''}
              >
                {time}
              </button>
              {selectedTime === time && (
                <button className="confirm-button">Confirm</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultationScheduler;
