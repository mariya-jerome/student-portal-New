"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function StudentsPage() {
  const students = useQuery(api.students.getAll);
  const addStudent = useMutation(api.students.add);
  const removeStudent = useMutation(api.students.remove);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  if (!students) return <p>Loading...</p>;

  const handleAdd = async () => {
    if (!name || !email || !department) return;

    await addStudent({ name, email, department });

    setName("");
    setEmail("");
    setDepartment("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Students</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT CARD */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">➕ Add Student</h2>

          <input
            className="w-full border p-2 rounded mb-3"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full border p-2 rounded mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full border p-2 rounded mb-4"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <button
            onClick={handleAdd}
            className="w-full bg-black text-white py-2 rounded"
          >
            Save Student
          </button>
        </div>

        {/* RIGHT TABLE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Department</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s._id} className="border-t">
                  <td className="p-2">{s.name}</td>
                  <td className="p-2">{s.email}</td>
                  <td className="p-2">{s.department}</td>
                  <td className="p-2">
                    <button
                      onClick={() => removeStudent({ id: s._id })}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
