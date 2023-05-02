import { AxiosInstance, AxiosResponse } from 'axios'
import { HttpClient } from '../../../../shared/services/api-service'

export class AxiosAdapter implements HttpClient<AxiosResponse> {
  constructor(private readonly axios: AxiosInstance) {
    this.axios = axios
  }

  post(url: string, data: any): Promise<AxiosResponse<any, any>> {
    return this.axios.post(url, data)
  }

  get(url: string): Promise<AxiosResponse<any, any>> {
    return this.axios.get(url)
  }
}
