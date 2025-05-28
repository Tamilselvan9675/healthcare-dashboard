import React from 'react';
import {
  Home,
  Calendar,
  Clock,
  BarChart,
  ClipboardList,
  MessageCircle,
  HelpCircle,
  Settings,
} from 'lucide-react';

const navItems = [
  { icon: <Home size={18} />, label: 'Dashboard' },
  { icon: <ClipboardList size={18} />, label: 'History' },
  { icon: <Calendar size={18} />, label: 'Calendar' },
  { icon: <Clock size={18} />, label: 'Appointments' },
  { icon: <BarChart size={18} />, label: 'Statistics' },
  { icon: <ClipboardList size={18} />, label: 'Tests' },
  { icon: <MessageCircle size={18} />, label: 'Chat' },
  { icon: <HelpCircle size={18} />, label: 'Support' },
  { icon: <Settings size={18} />, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-64  bg-white shadow-xl p-6 flex flex-col">
      <h2 className="text-xl font-bold text-blue-700 mb-8 tracking-wide">Main Menu</h2>

      <nav className="flex flex-col gap-4">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
