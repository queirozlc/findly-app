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
  birthDate: z
    .string()
    .nonempty("Birth date can't be empty")
    .regex(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/, {
      message: 'Birth date format is invalid, try: dd/MM/yyyy',
    })
    .refine(
      (value) => {
        const [day, month, year] = value.split('/').map(Number)
        if (day < 1 || day > 31) {
          return false
        }

        if (month < 1 || month > 12) {
          return false
        }

        if (year < 1900 || year > new Date().getFullYear()) {
          return false
        }

        return true
      },
      { message: 'Birth date is wrong' },
    )
    .refine(
      (value) => {
        // grab the birthdate and split it into day, month and year to verify if the user is at least 16 years old
        const [day, month, year] = value.split('/').map(Number)
        const birthDate = new Date(year, month - 1, day)
        const today = new Date()
        const age = today.getFullYear() - birthDate.getFullYear()
        const monthDiff = today.getMonth() - birthDate.getMonth()
        const dayDiff = today.getDate() - birthDate.getDate()
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
          return age - 1 >= 16
        }
        return age >= 16
      },
      { message: 'You must be at least 16 years old' },
    ),
})

export type SignUpFormProps = z.infer<typeof SignUpFormSchema>
export type FormDateOfBirthProps = z.infer<typeof DateOfBirthSchema>
