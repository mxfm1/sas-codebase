import 'dotenv/config'
import { defineConfig} from 'drizzle-kit'

const dbURL = process.env.DATABASE_URL!

export default defineConfig({
    schema: "./db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: dbURL
    }
})