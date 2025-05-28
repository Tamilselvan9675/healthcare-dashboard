import React from 'react';
// import anatomyImage from '../../assets/anatomy.png';
// import './AnatomySection.css';

export default function AnatomySection() {
  const indicators = [
    { label: 'Healthy Heart', color: 'green' },
    { label: 'Lungs', color: 'red' },
    { label: 'Teeth', color: 'blue' },
    { label: 'Bone', color: 'orange' },
  ];

  return (
    <div className="anatomy-section bg-white p-4 rounded-lg shadow-md">
      {/* <img src={anatomyImage} alt="Human Anatomy" className="w-full h-auto" /> */}
      <ul className="mt-4 grid grid-cols-2 gap-2">
        {indicators.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}