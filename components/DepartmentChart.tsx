"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#f97316", "#ef4444"];

type Props = {
  data: { department: string; count: number }[];
};

export default function DepartmentChart({ data }: Props) {
  if (!data || data.length === 0) {
    return <p className="text-muted-foreground">No data available</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="department" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" radius={[6, 6, 0, 0]}>
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
