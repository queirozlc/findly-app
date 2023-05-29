import { atom } from 'recoil'

type Input = {
  name: string
  email: string
  password: string
  birthDate?: string
}

const createUserState = atom<Input>({
  key: 'createUserState',
  default: {} as Input,
})

export { createUserState }
