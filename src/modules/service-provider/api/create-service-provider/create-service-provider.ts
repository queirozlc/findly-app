import { ApiService } from '../../../../shared/services/api-service'
import { AxiosResponse } from 'axios'
import { CreateServiceProviderRequest } from './create-service-provider-request'
import { VerificationCode } from '../../../../shared/types/verification-code'

export class CreateServiceProviderService extends ApiService {
  constructor() {
    super('service-provider')
  }

  execute(
    data: CreateServiceProviderRequest,
  ): Promise<AxiosResponse<VerificationCode>> {
    return this.post('', data) // Post for root uri /service-provider on api
  }
}
