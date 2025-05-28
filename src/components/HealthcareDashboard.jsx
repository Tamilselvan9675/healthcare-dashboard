import React from 'react';
import AnatomySection from '../dashboard/AnatomySection';
import HealthStatusCards from '../dashboard/HealthStatusCards';
import CalendarView from '../dashboard/CalendarView';
import UpcomingSchedule from '../dashboard/UpcomingSchedule';
import ActivityFeed from '../dashboard/ActivityFeed';
// import '../DashboardMainContent.css';

export default function HealthcareDashboard() {
  return (
    <main className="dashboard-main grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-gray-50 min-h-screen">
      <section className="col-span-1">
        <AnatomySection />
        <HealthStatusCards />
      </section>
      <section className="col-span-1">
        <CalendarView />
        <UpcomingSchedule />
        <ActivityFeed />
      </section>
    </main>
  );
}