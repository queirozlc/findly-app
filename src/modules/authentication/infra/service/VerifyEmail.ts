import { ApiService } from '../../../../shared/services/api-service'
import { AxiosResponse } from 'axios'

export class VerifyEmail extends ApiService {
  constructor() {
    super('/email/verify')
  }

  async verifyEmail(token: string, email: string): Promise<AxiosResponse> {
    return this.post('', { token, email })
  }
}
