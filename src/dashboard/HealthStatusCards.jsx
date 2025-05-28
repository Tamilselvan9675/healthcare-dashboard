import React from 'react';

const cards = [
  { title: 'Heart Rate', value: '78 bpm', bg: 'bg-red-100', text: 'text-red-600' },
  { title: 'Oxygen Saturation', value: '97%', bg: 'bg-blue-100', text: 'text-blue-600' },
  { title: 'Temperature', value: '98.6°F', bg: 'bg-yellow-100', text: 'text-yellow-600' },
  { title: 'Blood Pressure', value: '120/80', bg: 'bg-green-100', text: 'text-green-600' },
];

export default function HealthStatusCards() {
  return (
    <div className="health-status-cards grid grid-cols-2 gap-4 mt-4">
      {cards.map((card, index) => (
        <div key={index} className={`p-4 rounded-lg shadow-md ${card.bg}`}>
          <h4 className="text-sm font-semibold text-gray-500">{card.title}</h4>
          <p className={`text-xl font-bold ${card.text}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
}