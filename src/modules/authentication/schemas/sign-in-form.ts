import { z } from 'zod'

export const SignInFormSchema = z.object({
  email: z
    .string()
    .nonempty({
      message: 'E-mail is required',
    })
    .email({
      message: 'E-mail format is invalid',
    }),
  password: z.string().nonempty({
    message: 'Password is required',
  }),
})

export type SignInFormValues = z.infer<typeof SignInFormSchema>
