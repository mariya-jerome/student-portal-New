"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <CardHeader>
          <CardTitle>Total Students</CardTitle>
        </CardHeader>
        <CardContent className="text-4xl font-bold">120</CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <CardHeader>
          <CardTitle>Present Today</CardTitle>
        </CardHeader>
        <CardContent className="text-4xl font-bold">98</CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-pink-500 to-red-500 text-white">
        <CardHeader>
          <CardTitle>Absent</CardTitle>
        </CardHeader>
        <CardContent className="text-4xl font-bold">22</CardContent>
      </Card>
    </div>
  );
}
