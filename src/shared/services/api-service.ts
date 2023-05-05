import { API_URL } from '@env'
import axios, { AxiosResponse } from 'axios'

const app = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

export abstract class ApiService {
  protected constructor(protected readonly url: string) {
    this.url = url
  }

  protected post(requestUrl: string, body: unknown): Promise<AxiosResponse> {
    return app.post(`${this.url}${requestUrl}`, body)
  }

  protected get(requestUrl: string): Promise<AxiosResponse> {
    return app.get(`${this.url}${requestUrl}`)
  }
}
