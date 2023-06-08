import { useContext } from 'react'
import { AuthenticationContext } from '../contexts/authentication-context'

export function useAuth() {
  return useContext(AuthenticationContext)
}
