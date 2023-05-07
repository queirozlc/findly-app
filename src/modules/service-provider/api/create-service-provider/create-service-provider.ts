import { ApiService } from '../../../../shared/services/api-service'
import { AxiosResponse } from 'axios'
import { CreateServiceProviderData } from './create-service-provider-data'
import { VerificationCode } from '../../../../shared/types/verification-code'

export class CreateServiceProviderService extends ApiService {
  constructor() {
    super('service-provider')
  }

  execute(
    data: CreateServiceProviderData,
  ): Promise<AxiosResponse<VerificationCode>> {
    return this.post('', data) // Post for root uri /service-provider on api
  }
}
