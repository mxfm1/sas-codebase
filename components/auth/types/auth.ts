import { LoginSchema, registerSchema } from '@/lib/schemas/auth-schemas'
import { z } from 'zod'

export type LoginSchemaType =  z.infer <typeof LoginSchema>
export type RegisterSchemaType = z.infer <typeof registerSchema>