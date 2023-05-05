import { z } from 'zod'

export const VerifyCodeSchema = z.object({
  code: z
    .string()
    .nonempty('Code cannot be empty')
    .min(4, 'Code must be at least 4 characters long')
    .refine((value) => value.match(/^(?=.*[A-Z])(?=.*\d)[A-Z\d]{4}$/), {
      message: 'Invalid verification code',
    }),
})

export type FormVerifyCode = z.infer<typeof VerifyCodeSchema>
