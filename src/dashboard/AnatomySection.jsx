import React from 'react';
import anatomyImage from '../assets/anatomy.jpg'

export default function AnatomySection() {
  const indicators = [
    { label: 'Healthy Heart', color: '#22c55e' },
    { label: 'Lungs', color: '#ef4444' },
    { label: 'Teeth', color: '#3b82f6' },
    { label: 'Bone', color: '#f97316' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
      
      {/* Anatomy Image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={anatomyImage}
          alt="Human Anatomy"
          className="w-full h-auto rounded-xl shadow-sm object-contain"
        />
      </div>
      
      {/* Indicators */}
      <ul className="w-full md:w-1/2 grid grid-cols-1 gap-5">
        {indicators.map(({ label, color }) => (
          <li
            key={label}
            className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 rounded-lg p-3 transition"
            title={label}
          >
            <span
              className="w-6 h-6 rounded-full flex-shrink-0"
              style={{ backgroundColor: color }}
              aria-hidden="true"
            ></span>
            <span className="text-gray-800 font-semibold text-lg">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
