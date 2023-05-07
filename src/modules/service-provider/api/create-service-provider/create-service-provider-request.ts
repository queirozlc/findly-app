type PhoneProps = {
  number: string
  areaCode: string
  countryCode: string
}

export type CreateServiceProviderRequest = {
  name: string
  email: string
  password: string
  phone: PhoneProps
  birthDate: string
  cnpj?: string
  cpf?: string
}
