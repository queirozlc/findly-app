import { LocationObjectCoords } from 'expo-location'
import { atom } from 'recoil'

const costumerPositionState = atom<LocationObjectCoords>({
  key: 'costumerPositionState',
  default: {} as LocationObjectCoords,
})

export { costumerPositionState }
