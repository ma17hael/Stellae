import { bigint, boolean, index, timestamp, uniqueIndex, uuid, varchar} from "drizzle-orm/pg-core";
import { core } from "./schema.js";

export const members = core.table(
    "members",
    {
        memberId: bigint("member_id", { mode: "number"}).primaryKey().generatedAlwaysAsIdentity(),
        uuid: uuid("uuid").notNull().defaultRandom(),
        discordUserId: varchar("discord_user_id", { length: 20 }).notNull(),
        displayName: varchar("display_name", { length: 100 }),
        isActive: boolean("is_active").notNull().default(true),
        firstJoinedAt: timestamp("first_joined_at", { withTimezone: true }),
        lastJoinedAt: timestamp("last_joined_at", { withTimezone: true }),
        leftAt: timestamp("left_at", { withTimezone: true }),
        lastSeenAt: timestamp("last_seen_at", { withTimezone: true }),
        discordSyncEnabled: boolean("discord_sync_enabled").notNull().default(true),
        createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
    },
    (table) => [
        uniqueIndex("uq_members_uuid").on(table.uuid),
        uniqueIndex("uq_members_discord_user_id").on(table.discordUserId),
        index("idx_members_active").on(table.isActive),
  ],
);