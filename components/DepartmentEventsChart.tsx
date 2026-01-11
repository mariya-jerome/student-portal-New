"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

/* 🎨 Color palette */
const COLORS = [
  "#6366F1", // indigo
  "#22C55E", // green
  "#F59E0B", // amber
  "#EF4444", // red
  "#06B6D4", // cyan
  "#A855F7", // purple
];

export default function DepartmentEventsChart() {
  const events = useQuery(api.events.getAll);

  if (!events) return <p>Loading department events...</p>;

  /* ================= Group events by department =================
     NOTE: this assumes your event has a `department` field.
     If not, see NOTE at bottom 👇
  */
  const departmentMap: Record<string, number> = {};

  events.forEach((e: any) => {
    if (!e.department) return;
    departmentMap[e.department] =
      (departmentMap[e.department] || 0) + 1;
  });

  const data = Object.entries(departmentMap).map(
    ([department, count]) => ({
      department,
      count,
    })
  );

  if (data.length === 0)
    return <p>No department-wise events yet.</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Events by Department
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="department" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" radius={[6, 6, 0, 0]}>
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
