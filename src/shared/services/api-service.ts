import axios, { AxiosResponse } from 'axios'

const app = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
})

export abstract class ApiService {
  protected constructor(protected readonly url: string) {
    this.url = url
  }

  post(requestUrl: string, body: unknown): Promise<AxiosResponse> {
    return app.post(`${this.url}${requestUrl}`, body)
  }

  get(requestUrl: string): Promise<AxiosResponse> {
    return app.get(`${this.url}${requestUrl}`)
  }
}
