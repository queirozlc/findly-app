import { RoleName } from '../../../../shared/types/user'

export type JwtPayload = {
  sub: string
  email: string
  name: string
  avatar: string
  birthDate?: string
  iat?: number
  exp?: number
  roles: RoleName[]
}
