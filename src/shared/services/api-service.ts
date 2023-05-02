import { API_URL } from '@env'

export interface HttpClient<Response> {
  post(url: string, data: any): Promise<Response>
  get(url: string): Promise<Response>
}

export abstract class ApiService<Request, Response> {
  private _url: string = API_URL

  protected constructor(
    private readonly httpClient: HttpClient<Response>,
    protected readonly uri: string,
  ) {
    this.uri = uri
  }

  protected post(requestUrl: string, data: Request): Promise<Response> {
    return this.httpClient.post(`${this._url}${requestUrl}`, data)
  }

  protected get(requestUrl: string): Promise<Response> {
    return this.httpClient.get(`${this._url}${requestUrl}`)
  }
}
