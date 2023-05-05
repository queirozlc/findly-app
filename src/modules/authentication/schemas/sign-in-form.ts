import { z } from 'zod'

export const SignInFormSchema = z.object({
  email: z.string().nonempty('E-mail is required').email('E-mail is not valid'),
  password: z.string().nonempty("Password can't be empty"),
})

export type SignInFormValues = z.infer<typeof SignInFormSchema>
