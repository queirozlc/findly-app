import { z } from 'zod'

export const SignUpServiceProviderSchema = z.object({
  name: z.string().nonempty('Name cannot be empty'),
  email: z
    .string()
    .nonempty('E-mail cannot be empty')
    .email('E-mail must be valid e-mail address'),
  password: z
    .string()
    .nonempty('Password cannot be empty')
    .min(6, 'Password must have at least 6 characters')
    .max(32, 'Password must have at most 32 characters'),
})

export const CompleteSignUpServiceProviderSchema = z
  .object({
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
            console.log('entro aqui no dia')
            return false
          }

          if (month < 1 || month > 12) {
            console.log('entro aqui no mes')
            return false
          }

          if (year < 1900 || year > new Date().getFullYear()) {
            console.log('entro aqui no ano')
            return false
          }

          return true
        },
        { message: 'Birth date is wrong' },
      )
      .refine(
        (value) => {
          // grab the birthdate and split it into day, month and year to verify if the user is at least 18 years old
          const [day, month, year] = value.split('/').map(Number)
          const birthDate = new Date(year, month - 1, day)
          const today = new Date()
          const age = today.getFullYear() - birthDate.getFullYear()
          const monthDiff = today.getMonth() - birthDate.getMonth()
          const dayDiff = today.getDate() - birthDate.getDate()
          if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            return age - 1 >= 18
          }
          return age >= 18
        },
        { message: 'You must be at least 18 years old' },
      ),

    cnpj: z
      .string()
      .optional()
      .refine(
        (value) => {
          if (!value) return true // cnpj is optional
          return value.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)
        },
        { message: 'CNPJ is invalid, try: 00.000.000/0000-00' },
      ),
    cpf: z
      .string()
      .optional()
      .refine(
        (value) => {
          if (!value) return true // cpf is optional
          return value.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
        },
        { message: 'CPF is invalid, try: 000.000.000-00' },
      ),
  })
  .refine((fields) => fields.cpf || fields.cnpj, {
    path: ['cpf'], // path to the field
    message: 'CPF or CNPJ must be provided',
  })

export const SignUpServiceProviderPhoneSchema = z.object({
  number: z.string().nonempty('Number cannot be empty'),
  countryCode: z.string().nonempty('Country code cannot be empty'),
})

export type SignUpServiceProviderDTO = z.infer<
  typeof SignUpServiceProviderSchema
>

export type CompleteSignUpServiceProviderDTO = z.infer<
  typeof CompleteSignUpServiceProviderSchema
>

export type SignUpServiceProviderPhoneDTO = z.infer<
  typeof SignUpServiceProviderPhoneSchema
>
