"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function EventsPage() {
  const events = useQuery(api.events.getAll);
  const addEvent = useMutation(api.events.add);
  const updateEvent = useMutation(api.events.update);
  const removeEvent = useMutation(api.events.remove);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  if (!events) return <p className="p-6">Loading...</p>;

  /* ================= ADD / UPDATE ================= */
  const handleSubmit = async () => {
    if (!title || !date || !description || !department) return;

    if (editingId) {
      await updateEvent({
        id: editingId as any,
        title,
        date,
        description,
        department,
      });
    } else {
      await addEvent({
        title,
        date,
        description,
        department,
      });
    }

    setTitle("");
    setDate("");
    setDescription("");
    setDepartment("");
    setEditingId(null);
  };

  /* ================= EDIT ================= */
  const handleEdit = (event: any) => {
    setEditingId(event._id);
    setTitle(event.title);
    setDate(event.date);
    setDescription(event.description);
    setDepartment(event.department);
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id: string) => {
    await removeEvent({ id: id as any });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ================= ADD EVENT ================= */}
        <div className="bg-white rounded-xl p-6 shadow space-y-4">
          <h2 className="font-semibold text-lg">➕ Add Event</h2>

          <input
            type="text"
            placeholder="Event Title"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="date"
            className="w-full border rounded px-3 py-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="text"
            placeholder="Department (e.g. MCA, CS, IT)"
            className="w-full border rounded px-3 py-2"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="w-full border rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-2 rounded"
          >
            {editingId ? "Update Event" : "Save Event"}
          </button>
        </div>

        {/* ================= EVENTS LIST ================= */}
        <div className="bg-white rounded-xl p-6 shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Title</th>
                <th className="p-2">Date</th>
                <th className="p-2">Department</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id} className="border-t">
                  <td className="p-2">{event.title}</td>
                  <td className="p-2">{event.date}</td>
                  <td className="p-2">{event.department}</td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(event)}
                      className="px-3 py-1 bg-blue-600 text-white rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {events.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center p-4 text-gray-500">
                    No events found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
