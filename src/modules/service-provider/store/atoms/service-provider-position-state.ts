import { LocationObjectCoords } from 'expo-location'
import { atom } from 'recoil'

const serviceProviderPositionState = atom<LocationObjectCoords>({
  key: 'serviceProviderPositionState',
  default: {} as LocationObjectCoords,
})

export { serviceProviderPositionState }
