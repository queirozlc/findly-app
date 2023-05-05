import { AxiosResponse } from 'axios'
import { ApiService } from '../../../../shared/services/api-service'
import { SignInRequest } from '../../../../shared/types/sign-in-request'
import { SignInResponse } from '../../../../shared/types/sign-in-response'

export class AuthenticationService extends ApiService {
  constructor() {
    super('/auth')
  }

  async signIn({
    email,
    password,
  }: SignInRequest): Promise<AxiosResponse<SignInResponse>> {
    return this.post(this.url, { email, password })
  }

  async signInWithGoogle(): Promise<AxiosResponse<SignInResponse>> {
    return this.get(`${this.url}/google`)
  }
}
