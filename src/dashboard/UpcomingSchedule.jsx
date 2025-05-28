import React from 'react';

export default function UpcomingSchedule() {
  const schedule = [
    {
      patientName: 'Emily Clark',
      visitTime: '09:00 AM',
      visitReason: 'Dental Checkup',
    },
    {
      patientName: 'Michael Brown',
      visitTime: '10:30 AM',
      visitReason: 'Cardiology Review',
    },
    {
      patientName: 'Sarah Johnson',
      visitTime: '01:00 PM',
      visitReason: 'Orthopedic Consultation',
    },
  ];

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md mt-6 max-w-md mx-auto">
      <header className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Upcoming Schedule</h2>
      </header>
      <ul className="space-y-5">
        {schedule.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-start border-b border-gray-200 pb-4 last:border-0"
          >
            <div>
              <h4 className="text-gray-900 font-semibold">{item.patientName}</h4>
              <p className="text-sm text-gray-500">{item.visitReason}</p>
            </div>
            <time className="text-sm text-gray-600 font-medium">{item.visitTime}</time>
          </li>
        ))}
      </ul>
    </section>
  );
}
