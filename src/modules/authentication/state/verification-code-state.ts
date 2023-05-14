import { atom } from 'recoil'
import { VerificationCode } from '../../../shared/types/verification-code'

export const verificationCodeState = atom<VerificationCode>({
  key: 'verificationCodeState',
  default: {} as VerificationCode,
})
