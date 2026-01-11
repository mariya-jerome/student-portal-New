"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EventForm() {
  const createEvent = useMutation(api.events.create);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit() {
    if (!title || !date) return;

    await createEvent({ title, date, description });
    setTitle("");
    setDate("");
    setDescription("");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Event</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button onClick={handleSubmit}>Add Event</Button>
      </CardContent>
    </Card>
  );
}
