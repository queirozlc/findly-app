import { AxiosResponse } from 'axios'
import { ApiService } from '../../../../shared/services/api-service'
import { SignInRequest } from '../../../../shared/types/sign-in-request'
import { SignInResponse } from '../../../../shared/types/sign-in-response'
import { VerificationCodeRequest } from '../dtos/verification-code-request'

export class AuthenticationService extends ApiService {
  constructor() {
    super('/auth')
  }

  async signIn({
    email,
    password,
  }: SignInRequest): Promise<AxiosResponse<SignInResponse>> {
    return this.post('', { email, password })
  }

  async signInWithGoogle(): Promise<AxiosResponse<SignInResponse>> {
    return this.get(`${this.url}/google`)
  }

  async verifyEmail({
    token,
    email,
  }: VerificationCodeRequest): Promise<AxiosResponse<void>> {
    return this.post(`/email/verify`, { token, email })
  }
}
