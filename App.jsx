import React, { useState, useEffect } from 'react';
import './DigitalClock.css'; // Import the CSS file

const formatTime = (date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="digital-clock">
      <h1>{formatTime(time)}</h1>
    </div>
  );
};

export default DigitalClock;
