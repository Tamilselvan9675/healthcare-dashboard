import React from 'react';

const appointments = [
  { time: '09:00 AM', patient: 'Emily Clark', purpose: 'Dental Checkup' },
  { time: '10:30 AM', patient: 'Michael Brown', purpose: 'Cardiology Review' },
  { time: '01:00 PM', patient: 'Sarah Johnson', purpose: 'Orthopedic Consultation' },
];

export default function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule bg-white p-6 rounded-2xl shadow-md mt-6 max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Upcoming Schedule</h3>
      <ul className="space-y-5">
        {appointments.map(({ time, patient, purpose }, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-0"
          >
            <div>
              <p className="font-semibold text-gray-900">{patient}</p>
              <p className="text-sm text-gray-500">{purpose}</p>
            </div>
            <span className="text-sm text-gray-600 font-medium">{time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
