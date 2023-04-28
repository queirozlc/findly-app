import { atom } from 'recoil'

const mapState = atom<boolean>({
  key: 'mapState',
  default: false,
})

export { mapState }
