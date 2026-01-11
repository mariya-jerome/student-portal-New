"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function StudentEditDialog({ student }: any) {
  const updateStudent = useMutation(api.students.updateStudent);

  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [department, setDepartment] = useState(student.department);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Edit</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Student</DialogTitle>
        </DialogHeader>

        <Input value={name} onChange={e => setName(e.target.value)} />
        <Input value={email} onChange={e => setEmail(e.target.value)} />
        <Input value={department} onChange={e => setDepartment(e.target.value)} />

        <Button
          onClick={() =>
            updateStudent({
              id: student._id,
              name,
              email,
              department,
            })
          }
          className="bg-green-600"
        >
          Update
        </Button>
      </DialogContent>
    </Dialog>
  );
}
