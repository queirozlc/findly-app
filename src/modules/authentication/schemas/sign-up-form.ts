import { z } from 'zod'

export const SignUpFormSchema = z.object({
  name: z.string().nonempty("Name can't be empty"),
  email: z.string().nonempty('E-mail is required').email("E-mail isn't valid"),
  password: z
    .string()
    .nonempty("Password can't be empty")
    .min(6, "Password can't be less than 6 characters")
    .max(32, "Password can't be more than 32 characters"),
})

export type SignUpFormProps = z.infer<typeof SignUpFormSchema>
