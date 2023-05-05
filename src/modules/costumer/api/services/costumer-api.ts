import { ApiService } from '../../../../shared/services/api-service'
import { CreateCostumerRequest } from '../dtos/create-costumer-request'
import { AxiosResponse } from 'axios'
import { VerificationCode } from '../../../../shared/types/verification-code'

export class CostumerApiService extends ApiService {
  constructor() {
    super('costumers')
  }

  createCostumer(
    data: CreateCostumerRequest,
  ): Promise<AxiosResponse<VerificationCode>> {
    return this.post('', data) // Post to /costumers
  }
}
