"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import DepartmentChart from "@/components/DepartmentChart";

export default function ChartPage() {
  const students = useQuery(api.students.getStudents);

  if (!students) return <p>Loading chart...</p>;

  // Group students by department
  const departmentMap: Record<string, number> = {};

  students.forEach(student => {
    departmentMap[student.department] =
      (departmentMap[student.department] || 0) + 1;
  });

  const chartData = Object.entries(departmentMap).map(
    ([department, count]) => ({
      department,
      count,
    })
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">
        Students by Department
      </h1>

      <DepartmentChart data={chartData} />
    </div>
  );
}
