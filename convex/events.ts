import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("events").collect();
  },
});

export const add = mutation({
  args: {
    title: v.string(),
    date: v.string(),
    description: v.string(),
    department: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("events", {
      title: args.title,
      date: args.date,
      description: args.description,
      department: args.department,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("events"),
    title: v.string(),
    date: v.string(),
    description: v.string(),
    department: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      title: args.title,
      date: args.date,
      description: args.description,
      department: args.department,
    });
  },
});

export const remove = mutation({
  args: {
    id: v.id("events"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
