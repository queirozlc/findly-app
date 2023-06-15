import { atom } from 'recoil'
import { ServiceProviderData } from '../../../../modules/costumer/utils/models/abstract-service-provider-presenter'

const serviceProviderDetailState = atom<ServiceProviderData | null>({
  key: 'serviceProviderDetail',
  default: {} as ServiceProviderData,
})

export { serviceProviderDetailState }
