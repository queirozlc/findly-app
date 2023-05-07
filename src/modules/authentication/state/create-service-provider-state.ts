import { atom } from 'recoil'
import { CreateServiceProviderRequest } from '../../service-provider/api/create-service-provider/create-service-provider-request'

export const createServiceProviderState = atom<CreateServiceProviderRequest>({
  key: 'createServiceProviderState',
  default: {} as CreateServiceProviderRequest,
})
