"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export type DepartmentEventsChartProps = {
  data: {
    department: string;
    count: number;
  }[];
};

export default function DepartmentEventsChart({
  data,
}: DepartmentEventsChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="department" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" />
      </BarChart>
    </ResponsiveContainer>
  );
}
