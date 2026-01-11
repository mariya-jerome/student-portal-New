"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function DashboardCards() {
  const students = useQuery(api.students.getAll);
  const events = useQuery(api.events.getAll);

  if (!students || !events) return null;

  const cards = [
    {
      title: "Total Students",
      value: students.length,
      color: "bg-blue-500",
    },
    {
      title: "Total Events",
      value: events.length,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} text-white rounded-xl p-6 shadow`}
        >
          <p className="text-sm opacity-80">{card.title}</p>
          <p className="text-3xl font-bold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
