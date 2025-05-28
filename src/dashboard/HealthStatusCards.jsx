import React from 'react';

export default function HealthStatusCards() {
  const healthMetrics = [
    {
      name: 'Heart Rate',
      value: '78 bpm',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      symbol: '❤️',
    },
    {
      name: 'Oxygen Saturation',
      value: '97%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      symbol: '🩸',
    },
    {
      name: 'Temperature',
      value: '98.6°F',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      symbol: '🌡️',
    },
    {
      name: 'Blood Pressure',
      value: '120/80',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      symbol: '💓',
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-6 mt-4 max-w-md mx-auto">
      {healthMetrics.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-4 p-5 rounded-2xl shadow-md ${item.bgColor}`}
        >
          <div className={`text-3xl ${item.color}`}>{item.symbol}</div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700">{item.name}</h4>
            <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
