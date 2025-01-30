import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'

const DATABASEURL = process.env.DATABASE_URL!

const sql = neon(DATABASEURL);


export const db = drizzle(sql,{
    schema
})