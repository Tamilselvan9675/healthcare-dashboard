import React from 'react';
import { Bell, Plus } from 'lucide-react';
import avatar from '../assets/avatar.jpg';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700">
      {/* Logo */}
      <div className="text-white text-2xl font-extrabold select-none">
        Healthcare Dashboard
      </div>

      {/* Search bar */}
      <div className="flex items-center bg-blue-100/30 rounded-full px-3 py-1.5 w-64 text-white">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent placeholder-white/70 focus:outline-none w-full text-sm"
        />
      </div>

      {/* Action buttons and profile */}
      <div className="flex items-center gap-6 text-white">
        <Bell className="cursor-pointer hover:text-blue-300 transition" size={20} />

        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-9 h-9 rounded-full border-2 border-white"
          />
          <span className="font-medium select-none">John Doe</span>
        </div>

        <button
          className="bg-white text-blue-700 p-2 rounded-full shadow hover:bg-blue-100 transition"
          aria-label="Add"
        >
          <Plus size={18} />
        </button>
      </div>
    </header>
  );
}
