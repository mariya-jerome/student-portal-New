"use client";

export const dynamic = "force-dynamic";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import DepartmentChart from "@/components/DepartmentChart";
import EventsChart from "@/components/EventsChart";
import DepartmentEventsChart from "@/components/DepartmentEventsChart";

export default function DashboardPage() {
  const students = useQuery(api.students.getAll);
  const events = useQuery(api.events.getAll);

  if (!students || !events) {
    return <p className="p-6">Loading...</p>;
  }

  const studentDeptMap: Record<string, number> = {};
  students.forEach((s) => {
    studentDeptMap[s.department] =
      (studentDeptMap[s.department] || 0) + 1;
  });

  const studentsChartData = Object.entries(studentDeptMap).map(
    ([department, count]) => ({ department, count })
  );

  const eventDeptMap: Record<string, number> = {};
  events.forEach((e) => {
    if (!e.department) return;
    eventDeptMap[e.department] =
      (eventDeptMap[e.department] || 0) + 1;
  });

  const eventsChartData = Object.entries(eventDeptMap).map(
    ([department, count]) => ({ department, count })
  );

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">📊 Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl p-6 text-white bg-gradient-to-r from-indigo-500 to-purple-500">
          <p>Total Students</p>
          <h2 className="text-3xl font-bold">{students.length}</h2>
        </div>

        <div className="rounded-xl p-6 text-white bg-gradient-to-r from-green-500 to-emerald-500">
          <p>Total Events</p>
          <h2 className="text-3xl font-bold">{events.length}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Students by Department
          </h2>
          <DepartmentChart data={studentsChartData} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <EventsChart />
        </div>

        <div className="bg-white p-6 rounded-xl shadow md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">
            Events by Department
          </h2>
          <DepartmentEventsChart data={eventsChartData} />
        </div>
      </div>
    </div>
  );
}
