import { sql } from "drizzle-orm"
import {
    boolean,
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
    pgEnum,
    type AnyPgColumn,
    uniqueIndex,
    unique,
    uuid
  } from "drizzle-orm/pg-core"
  import type { AdapterAccount } from "next-auth/adapters"

  export function lower(email:AnyPgColumn){
    return sql `lower(${email})`
  }

  export const roleEnum = pgEnum("role",["USER","ADMIN"])
   
  export const users = pgTable("user", {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
    password: text("password"),
    role: roleEnum("role").notNull().default("USER")
  },(table) => ({
        emailUniqueIndex: uniqueIndex("emailUniqueIndex").on(lower(table.email))
  }))
   
  export const accounts = pgTable(
    "account",
    {
      userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
      type: text("type").$type<AdapterAccount>().notNull(),
      provider: text("provider").notNull(),
      providerAccountId: text("providerAccountId").notNull(),
      refresh_token: text("refresh_token"),
      access_token: text("access_token"),
      expires_at: integer("expires_at"),
      token_type: text("token_type"),
      scope: text("scope"),
      id_token: text("id_token"),
      session_state: text("session_state"),
    },
    (account) => [
      {
        compoundKey: primaryKey({
          columns: [account.provider, account.providerAccountId],
        }),
      },
    ]
  )
   
  export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  })
   
  export const verificationTokens = pgTable(
    "verificationToken",
    {
      identifier: text("identifier").notNull(),
      token: text("token").notNull(),
      expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (verificationToken) => [
      {
        compositePk: primaryKey({
          columns: [verificationToken.identifier, verificationToken.token],
        }),
      },
    ]
  )
   
  export const authenticators = pgTable(
    "authenticator",
    {
      credentialID: text("credentialID").notNull().unique(),
      userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
      providerAccountId: text("providerAccountId").notNull(),
      credentialPublicKey: text("credentialPublicKey").notNull(),
      counter: integer("counter").notNull(),
      credentialDeviceType: text("credentialDeviceType").notNull(),
      credentialBackedUp: boolean("credentialBackedUp").notNull(),
      transports: text("transports"),
    },
    (authenticator) => [
      {
        compositePK: primaryKey({
          columns: [authenticator.userId, authenticator.credentialID],
        }),
      },
    ]
  )

export const verifyToken = pgTable("verifyToken",{
  id: uuid().primaryKey().notNull().defaultRandom(),
  email: text().notNull(),
  token: text().notNull().unique(),
  expires: timestamp("expires",{mode:"date"}).notNull()
},(table) => {
  return {
    uniqueEmailToken: unique("unique_email_token").on(table.email,table.token)
  }
})