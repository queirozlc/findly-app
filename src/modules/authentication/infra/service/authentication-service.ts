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
    const response = await this.post(this.url, { email, password })
    console.log(response)
    return response
  }

  async signInWithGoogle(): Promise<AxiosResponse<SignInResponse>> {
    return this.get(`${this.url}/google`)
  }

  async verifyCode({
    code,
  }: VerificationCodeRequest): Promise<AxiosResponse<void>> {
    return this.post(`${this.url}/email/verify`, { code })
  }
}
