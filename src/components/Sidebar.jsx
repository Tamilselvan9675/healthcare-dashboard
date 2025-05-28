import React from 'react';
// import './Sidebar.css';
import { Home, Calendar, Clock, BarChart, ClipboardList, MessageCircle, HelpCircle, Settings } from 'lucide-react';

const navItems = [
  { icon: <Home />, label: 'Dashboard' },
  { icon: <ClipboardList />, label: 'History' },
  { icon: <Calendar />, label: 'Calendar' },
  { icon: <Clock />, label: 'Appointments' },
  { icon: <BarChart />, label: 'Statistics' },
  { icon: <ClipboardList />, label: 'Tests' },
  { icon: <MessageCircle />, label: 'Chat' },
  { icon: <HelpCircle />, label: 'Support' },
  { icon: <Settings />, label: 'Setting' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar w-60 bg-gray-100 h-screen p-4 shadow-lg">
      <h2 className="text-gray-700 font-bold mb-6">General</h2>
      <nav className="flex flex-col gap-4">
        {navItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-600 hover:text-blue-500 cursor-pointer">
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}