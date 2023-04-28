import { atom } from 'recoil'
import { ServiceProviderData } from '../../../../modules/costumer/utils/view-model/abstract-service-provider-presenter'

const initialState = {
  id: '',
  name: '',
  phoneNumber: '',
  description: '',
  averageRating: 0,
  thumbnail: '',
}

const serviceProviderDetailState = atom<ServiceProviderData>({
  key: 'serviceProviderDetail',
  default: initialState,
})

export { serviceProviderDetailState }
