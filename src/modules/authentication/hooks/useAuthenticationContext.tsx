import { useContext } from 'react'
import { AuthenticationContext } from '../contexts/authentication-context'

export default function useAuthenticationContext() {
  const context = useContext(AuthenticationContext)

  if (!context) {
    throw new Error(
      'Not context found. Please use this hook inside the AuthenticationContextProvider',
    )
  }

  return context
}
