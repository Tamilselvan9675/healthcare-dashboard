import React from 'react';
import anatomyImage from '../assets/anatomy.jpg';

export default function AnatomySection() {
  const bodyParts = [
    { name: 'Healthy Heart', indicatorColor: '#22c55e' },   // Green
    { name: 'Lungs', indicatorColor: '#ef4444' },          // Red
    { name: 'Teeth', indicatorColor: '#3b82f6' },          // Blue
    { name: 'Bone', indicatorColor: '#f97316' },           // Orange
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-2xl flex flex-col md:flex-row items-center gap-8 mt-6">
      
      {/* Left: Anatomy Image */}
      <div className="w-full md:w-1/2">
        <img
          src={anatomyImage}
          alt="Anatomy Diagram"
          className="rounded-xl object-cover w-full h-auto shadow-sm"
        />
      </div>

      {/* Right: Body Part Indicators */}
      <div className="w-full md:w-1/2">
        <ul className="grid grid-cols-1 gap-5">
          {bodyParts.map((part, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 hover:bg-gray-100 rounded-lg p-3 transition-colors duration-200"
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: part.indicatorColor }}
              />
              <span className="text-lg font-semibold text-gray-800">{part.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
