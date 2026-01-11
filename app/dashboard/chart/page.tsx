"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function ChartPage() {
  const students = useQuery(api.students.getAll);

  if (!students) return <p>Loading chart...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Students Chart</h1>

      <p>Total Students: {students.length}</p>
    </div>
  );
}
