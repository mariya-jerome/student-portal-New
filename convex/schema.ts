import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  students: defineTable({
    name: v.string(),
    email: v.string(),
    department: v.string(),
  }),

  events: defineTable({
    title: v.string(),
    date: v.string(),
    description: v.string(),
     department: v.optional(v.string()),
  }),
});
