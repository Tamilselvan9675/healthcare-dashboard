import React, { useState, useEffect } from 'react';

export default function CalendarView() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    // Get first day of the month (0 = Sunday, 6 = Saturday)
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Get total days in the month
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Create array of days including empty slots before month start
    const daysArray = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null);
    }
    for (let d = 1; d <= totalDays; d++) {
      daysArray.push(d);
    }

    setDays(daysArray);
  }, []);

  const todayDate = new Date().getDate();

  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="calendar-view bg-white p-6 rounded-2xl shadow-md max-w-sm mx-auto mt-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Calendar</h3>
      <div className="grid grid-cols-7 gap-2 text-center text-gray-500 font-medium mb-2">
        {dayLabels.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {days.map((day, idx) => (
          <div
            key={idx}
            className={`h-10 flex items-center justify-center rounded-md cursor-pointer 
              ${day === todayDate ? 'bg-blue-500 text-white font-semibold' : 'text-gray-700 hover:bg-blue-100'}`}
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
}
