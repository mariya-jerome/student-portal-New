"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

export default function StudentTable() {
  const students = useQuery(api.students.getAll);
  const removeStudent = useMutation(api.students.remove);

  if (!students) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Department</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s._id} className="border-t">
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.email}</td>
              <td className="p-2">{s.department}</td>
              <td className="p-2 text-center">
                <Button
                  variant="destructive"
                  onClick={() => removeStudent({ id: s._id })}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
