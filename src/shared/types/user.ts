export interface Phone {
  number: string
  areaCode: string
  countryCode: string
}

export interface Address {
  street: string
  number: string
  complement: string
  state: string
  city: string
  zipCode: string
  country: string
}

export enum RoleName {
  ADMIN = 'ADMIN',
  SERVICE_PROVIDER = 'SERVICE_PROVIDER',
  COSTUMER = 'COSTUMER',
}

export interface Role {
  id: string
  name: RoleName
}

export type User = {
  id: string
  email: string
  profileImage: string
  name: string
  roles: Role[]
}
