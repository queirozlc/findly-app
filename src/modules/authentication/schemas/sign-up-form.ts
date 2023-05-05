import { z } from 'zod'

export const SignUpFormSchema = z.object({
  name: z.string().nonempty({
    message: 'Name is required',
  }),
  email: z
    .string()
    .nonempty({
      message: 'E-mail is required',
    })
    .email({
      message: 'E-mail format is invalid',
    }),
  password: z
    .string()
    .nonempty({
      message: 'Password is required',
    })
    .min(8, {
      message: 'Password must be at least 8 characters long',
    })
    .max(32, {
      message: 'Password must be at most 32 characters long',
    }),
})

export type SignUpFormProps = z.infer<typeof SignUpFormSchema>
