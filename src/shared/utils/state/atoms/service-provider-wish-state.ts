import { atom } from 'recoil'

interface ServiceProviderWishState {
  id: string
  isRated: boolean
}

const defaultServiceProviderWishState: ServiceProviderWishState[] = []

const serviceProviderFavoriteState = atom<ServiceProviderWishState[]>({
  key: 'serviceProviderWish',
  default: defaultServiceProviderWishState,
})

export { serviceProviderFavoriteState }
