import React from 'react';

const appointments = [
  { time: '09:00 AM', patient: 'Emily Clark', purpose: 'Dental Checkup' },
  { time: '10:30 AM', patient: 'Michael Brown', purpose: 'Cardiology Review' },
  { time: '01:00 PM', patient: 'Sarah Johnson', purpose: 'Orthopedic Consultation' },
];

export default function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule bg-white p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-semibold mb-4">Upcoming Schedule</h3>
      <ul className="space-y-3">
        {appointments.map((item, index) => (
          <li key={index} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium text-gray-800">{item.patient}</p>
              <p className="text-sm text-gray-500">{item.purpose}</p>
            </div>
            <span className="text-sm text-gray-600">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}