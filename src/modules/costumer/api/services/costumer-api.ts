import { AxiosResponse } from 'axios'
import { ApiService } from '../../../../shared/services/api-service'
import { VerificationCode } from '../../../../shared/types/verification-code'
import { CreateCostumerRequest } from '../dtos/create-costumer-request'

export class CostumerApiService extends ApiService {
  constructor() {
    super('customers')
  }

  createCostumer(
    data: CreateCostumerRequest,
  ): Promise<AxiosResponse<VerificationCode>> {
    return this.post('', data) // Post to /costumers
  }
}
