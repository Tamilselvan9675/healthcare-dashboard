import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HealthcareDashboard from './components/HealthcareDashboard';
import './App.css';

export default function App() {
  return (
    <div className="app-container flex">
      <Sidebar />
      <div className="main-content flex flex-col w-full">
        <Header />
        <HealthcareDashboard />
      </div>
    </div>
  );
}