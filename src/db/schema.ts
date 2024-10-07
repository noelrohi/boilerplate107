import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const POSTS = sqliteTable("posts", {
  id: text("id").primaryKey().$defaultFn(createId),
  text: text("text").notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
  createdBy: text("created_by").notNull(),
  participants: integer("participants").notNull(),
});

export type InsertPost = typeof POSTS.$inferInsert;
export type SelectPost = typeof POSTS.$inferSelect;
