import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("students").collect();
  },
});

export const add = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    department: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("students", {
      name: args.name,
      email: args.email,
      department: args.department,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("students"),
    name: v.string(),
    email: v.string(),
    department: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      name: args.name,
      email: args.email,
      department: args.department,
    });
  },
});

export const remove = mutation({
  args: {
    id: v.id("students"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
