"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EventList() {
  const events = useQuery(api.events.getAll);
  const removeEvent = useMutation(api.events.remove);

  if (!events) return <p>Loading events...</p>;

  return (
    <div className="space-y-3">
      {events.map((event) => (
        <Card key={event._id}>
          <CardContent className="flex justify-between items-center p-4">
            <div>
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-muted-foreground">{event.date}</p>
              <p className="text-sm">{event.description}</p>
            </div>
            <Button
              variant="destructive"
              onClick={() => removeEvent({ id: event._id })}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
