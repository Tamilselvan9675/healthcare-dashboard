import React from 'react';
// import './Header.css';
import { Bell, Plus } from 'lucide-react';

export default function Header() {
  return (
    <header className="header flex items-center justify-between p-4 shadow-md bg-white">
      <div className="logo text-xl font-bold">Healthcare.</div>
      <div className="search-bar">🔍 <input type="text" placeholder="Search..." disabled /></div>
      <div className="header-actions flex items-center gap-4">
        <Bell />
        <div className="user-profile flex items-center gap-2">
          <img src="/assets/avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
          <span>John Doe</span>
        </div>
        <button className="add-btn bg-blue-500 text-white p-2 rounded-full"><Plus /></button>
      </div>
    </header>
  );
}