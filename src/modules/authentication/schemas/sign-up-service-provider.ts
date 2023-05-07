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
  birthDate: z
    .string()
    .nonempty("Birth date can't be empty")
    .regex(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/, {
      message: 'Birth date format is invalid, try: dd/MM/yyyy',
    }),

  cnpj: z
    .string()
    .optional()
    .refine((value) => value?.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/), {
      message: 'CNPJ is invalid, try: 00.000.000/0000-00',
    }),
  cpf: z
    .string()
    .optional()
    .refine((value) => value?.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/), {
      message: 'CPF is invalid, try: 000.000.000-00',
    }),
})

export type SignUpServiceProviderDTO = z.infer<
  typeof SignUpServiceProviderSchema
>
