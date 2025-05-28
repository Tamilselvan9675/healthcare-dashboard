import React from 'react';

const weeklyActivity = [
  { day: 'Mon', count: 4 },
  { day: 'Tue', count: 6 },
  { day: 'Wed', count: 3 },
  { day: 'Thu', count: 5 },
  { day: 'Fri', count: 2 },
  { day: 'Sat', count: 4 },
  { day: 'Sun', count: 3 },
];

export default function ActivityFeed() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md mt-6 max-w-md mx-auto">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-bold text-gray-800">Weekly Activity</h2>
        <span className="text-sm text-gray-500">3 appointments this week</span>
      </header>

      <div className="flex items-end justify-between h-25 space-x-3">
        {weeklyActivity.map(({ day, count }) => (
          <div key={day} className="flex flex-col items-center group">
            <div
              className="w-3.5 bg-blue-600 rounded-t-md transition-all duration-300 group-hover:bg-blue-700"
              style={{ height: `${count * 12}px` }}
              title={`${count} activities on ${day}`}
            ></div>
            <span className="mt-2 text-xs text-gray-600 font-medium">{day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
