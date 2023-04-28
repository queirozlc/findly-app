import { atom } from 'recoil'
import { ServiceData } from '../../../../modules/costumer/utils/view-model/abstract-service-presenter'

const initialState: ServiceData = {
  id: '',
  title: '',
  description: '',
  price: 0,
  serviceProviderId: '',
  image: '',
}

const serviceDetailsState = atom<ServiceData>({
  key: 'serviceState',
  default: initialState,
})

export { serviceDetailsState }
