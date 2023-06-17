import { API_URL } from '@env'
import axios, { AxiosResponse } from 'axios'

const app = axios.create({
  baseURL: API_URL,
})

export abstract class ApiService {
  protected constructor(protected readonly url: string) {
    this.url = url
  }

  public static registerJwtInterceptor(token: string): void {
    app.interceptors.request.use(
      async (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => Promise.reject(error),
    )
  }

  post(requestUrl: string, body: unknown): Promise<AxiosResponse> {
    console.log(`${this.url}${requestUrl}`)
    return app.post(`${this.url}${requestUrl}`, body)
  }

  get(requestUrl: string): Promise<AxiosResponse> {
    return app.get(`${this.url}${requestUrl}`)
  }
}
