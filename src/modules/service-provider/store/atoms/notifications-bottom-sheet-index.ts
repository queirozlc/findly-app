import { atom } from 'recoil'

const notificationBottomSheetIndexState = atom<number>({
  key: 'notificationBottomSheetIndexState',
  default: 0,
})

export { notificationBottomSheetIndexState }
