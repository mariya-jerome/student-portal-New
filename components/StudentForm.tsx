"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Input } from "@/components/ui/input";

export default function StudentForm() {
  const addStudent = useMutation(api.students.add);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !department) return;

    await addStudent({ name, email, department });

    setName("");
    setEmail("");
    setDepartment("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="font-semibold text-lg">➕ Add Student</h2>

      <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <Input placeholder="Department" value={department} onChange={e => setDepartment(e.target.value)} />

      {/* ✅ FIXED SAVE BUTTON */}
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900"
      >
        Save Student
      </button>
    </form>
  );
}
