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

export const DateOfBirthSchema = z.object({
  date: z
    .string()
    .nonempty('Birth date cannot be empty')
    .refine(
      (value) =>
        value.match(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/),
      {
        message: 'Invalid date format, expected dd/mm/yyyy.',
      },
    ),
})

export type SignUpFormProps = z.infer<typeof SignUpFormSchema>
export type FormDateOfBirthProps = z.infer<typeof DateOfBirthSchema>
