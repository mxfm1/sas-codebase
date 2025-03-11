CREATE TABLE "notifications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"resourseId" text,
	"isRead" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "preferences" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "preferences_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "userPreferences" (
	"userId" text NOT NULL,
	"preference_id" uuid NOT NULL,
	CONSTRAINT "userPreferences_userId_preference_id_pk" PRIMARY KEY("userId","preference_id")
);
--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "userPreferences" ADD CONSTRAINT "userPreferences_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "userPreferences" ADD CONSTRAINT "userPreferences_preference_id_preferences_id_fk" FOREIGN KEY ("preference_id") REFERENCES "public"."preferences"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_preference_id" ON "userPreferences" USING btree ("preference_id");