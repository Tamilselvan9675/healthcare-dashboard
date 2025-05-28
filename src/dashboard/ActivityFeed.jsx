import React from 'react';
import { ActivityIcon } from 'lucide-react';

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
    <div className="bg-white rounded-2xl p-4 shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Activity</h3>
        <p className="text-sm text-gray-500">3 appointment on this week</p>
      </div>
      <div className="flex justify-between items-end h-24">
        {activities.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-2.5 bg-blue-500 rounded-full"
              style={{ height: `${item.count * 10}px` }}
            ></div>
            <span className="text-xs mt-1 text-gray-600">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}