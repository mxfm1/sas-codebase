CREATE TABLE "verifyToken" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text,
	"token" text,
	"expires" timestamp NOT NULL,
	CONSTRAINT "verifyToken_token_unique" UNIQUE("token"),
	CONSTRAINT "unique_email_token" UNIQUE("email","token")
);
--> statement-breakpoint
DROP TABLE "test" CASCADE;