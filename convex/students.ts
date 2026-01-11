import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/* ================= GET ALL STUDENTS ================= */
export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("students").collect();
  },
});

/* ================= ADD STUDENT ================= */
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

/* ================= REMOVE STUDENT ================= */
export const remove = mutation({
  args: {
    id: v.id("students"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
