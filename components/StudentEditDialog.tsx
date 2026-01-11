"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function StudentEditDialog({ student }: any) {
  const updateStudent = useMutation(api.students.update);

  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [department, setDepartment] = useState(student.department);

  const handleUpdate = async () => {
    await updateStudent({
      id: student._id,
      name,
      email,
      department,
    });
  };

  return (
    <div className="space-y-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded px-2 py-1 w-full"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded px-2 py-1 w-full"
      />

      <input
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="border rounded px-2 py-1 w-full"
      />

      <button
        onClick={handleUpdate}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Update
      </button>
    </div>
  );
}
