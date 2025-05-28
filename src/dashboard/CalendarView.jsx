import React, { useState, useEffect } from 'react';

export default function CalendarView() {
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const firstWeekDay = new Date(year, month, 1).getDay(); // Sunday = 0
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const gridDays = [];

    for (let i = 0; i < firstWeekDay; i++) {
      gridDays.push(null); // Fill empty days at start
    }

    for (let d = 1; d <= daysInMonth; d++) {
      gridDays.push(d);
    }

    setCalendarDays(gridDays);
  }, []);

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date().getDate();

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md max-w-sm mx-auto mt-4">
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Calendar</h2>
      </header>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-2 text-center text-gray-500 text-sm font-medium mb-2">
        {weekDays.map((label) => (
          <div key={label}>{label}</div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {calendarDays.map((date, idx) => (
          <div
            key={idx}
            className={`h-10 w-10 flex items-center justify-center rounded-md transition 
              ${date === today 
                ? 'bg-blue-500 text-white font-bold' 
                : date 
                  ? 'text-gray-700 hover:bg-blue-100 cursor-pointer' 
                  : ''}`}
          >
            {date || ''}
          </div>
        ))}
      </div>
    </section>
  );
}
