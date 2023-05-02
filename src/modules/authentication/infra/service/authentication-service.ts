import { API_URL } from '@env'
import axios, { AxiosResponse } from 'axios'
import { ApiService } from '../../../../shared/services/api-service'
import { SignInRequest } from '../../../../shared/types/sign-in-request'
import { SignInResponse } from '../../../../shared/types/sign-in-response'
import { AxiosAdapter } from '../adapters/axios-adapter'

const app = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

export class AuthenticationService extends ApiService<
  SignInRequest,
  AxiosResponse<SignInResponse>
> {
  constructor(protected readonly uri: string) {
    super(new AxiosAdapter(app), uri)
    this.uri = uri
  }

  async signIn({
    email,
    password,
  }: SignInRequest): Promise<AxiosResponse<SignInResponse>> {
    return this.post(this.uri, { email, password })
  }

  async signInWithGoogle(): Promise<AxiosResponse<SignInResponse>> {
    return this.get(`${this.uri}/google`)
  }
}
