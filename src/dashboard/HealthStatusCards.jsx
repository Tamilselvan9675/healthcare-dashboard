import React from 'react';

const cards = [
  { title: 'Heart Rate', value: '78 bpm', bg: 'bg-red-100', text: 'text-red-600', icon: '❤️' },
  { title: 'Oxygen Saturation', value: '97%', bg: 'bg-blue-100', text: 'text-blue-600', icon: '🩸' },
  { title: 'Temperature', value: '98.6°F', bg: 'bg-yellow-100', text: 'text-yellow-600', icon: '🌡️' },
  { title: 'Blood Pressure', value: '120/80', bg: 'bg-green-100', text: 'text-green-600', icon: '💓' },
];

export default function HealthStatusCards() {
  return (
    <div className="health-status-cards grid grid-cols-2 gap-6 mt-4 max-w-md mx-auto">
      {cards.map(({ title, value, bg, text, icon }, index) => (
        <div key={index} className={`p-6 rounded-2xl shadow-md flex items-center gap-4 ${bg}`}>
          <div className={`text-3xl ${text}`}>{icon}</div>
          <div>
            <h4 className="text-sm font-semibold text-gray-600">{title}</h4>
            <p className={`text-2xl font-bold ${text}`}>{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
