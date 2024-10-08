import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import { sqliteTable } from "drizzle-orm/sqlite-core";

export const POSTS = sqliteTable("posts", (t) => ({
  id: t.text().primaryKey().$defaultFn(createId),
  text: t.text().notNull(),
  createdAt: t.text().notNull().default(sql`(CURRENT_TIMESTAMP)`),
  createdBy: t.text().notNull(),
  participants: t.integer().notNull(),
}));

export type InsertPost = typeof POSTS.$inferInsert;
export type SelectPost = typeof POSTS.$inferSelect;
