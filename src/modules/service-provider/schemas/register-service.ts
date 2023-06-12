import { z } from 'zod'

export const RegisterServiceSchema = z.object({
  name: z
    .string()
    .nonempty('O nome não pode ser vazio')
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
  description: z
    .string()
    .nonempty('A descrição não pode ser vazia')
    .min(3, { message: 'A descrição deve ter no mínimo 3 caracteres' })
    .max(100, { message: 'A descrição deve ter no máximo 100 caracteres' }),
  price: z
    .number()
    .positive('O preço deve ser maior que zero')
    .min(1, { message: 'O preço deve ser maior que zero' }),
})

export type RegisterServiceSchemaType = z.infer<typeof RegisterServiceSchema>
