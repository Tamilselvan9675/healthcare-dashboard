import React from 'react';

const activities = [
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
    <div className="bg-white rounded-2xl p-6 shadow-md w-full max-w-md mt-4">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-xl font-semibold text-gray-800">Activity</h3>
        <p className="text-sm text-gray-500">3 appointments this week</p>
      </div>
      <div className="flex justify-between items-end h-28 space-x-3">
        {activities.map(({ day, count }) => (
          <div
            key={day}
            className="flex flex-col items-center cursor-pointer group"
            title={`${count} activities on ${day}`}
          >
            <div
              className="w-4 bg-blue-500 rounded-t-lg transition-all duration-300 group-hover:bg-blue-600"
              style={{ height: `${count * 12}px` }}
            />
            <span className="mt-2 text-xs font-medium text-gray-600">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
