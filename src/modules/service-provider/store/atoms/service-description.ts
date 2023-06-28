import { atom } from 'recoil'

const initialState = ''
export const serviceDescriptionAtom = atom<string>({
  key: 'serviceDescriptionAtom',
  default: initialState,
})
