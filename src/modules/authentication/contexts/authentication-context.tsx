import { User } from '../../../shared/types/user'
import { SignInRequest } from '../../../shared/types/sign-in-request'
import { createContext, ReactNode, useState } from 'react'
import { useSignIn } from '../hooks/useSignIn'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AxiosError } from 'axios'
import { BaseHttpError } from '../../../shared/errors/BaseHttpError'

type Output = {
  user: User | null
  isLogged: boolean
  signIn: (input: SignInRequest) => Promise<void>
  signOut: () => Promise<void>
  error?: string
  loading?: boolean
}

export const AuthenticationContext = createContext<Output>({} as Output)

type Props = {
  children: ReactNode
}

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const { signInMutation, signInResponse, signInError, signInLoading } =
    useSignIn()

  async function signIn(input: SignInRequest): Promise<void> {
    setLoading(signInLoading)
    signInMutation(input)
    if (!signInResponse) {
      const { response } = signInError as AxiosError<BaseHttpError>
      setError(response?.data.message)
      return
    }

    const { data } = signInResponse
    setUser({
      ...data,
      roles: [],
      id: data.sub,
    })
    await AsyncStorage.setItem('@USER', JSON.stringify(data))
  }

  async function signOut() {
    setUser(null)
    await AsyncStorage.removeItem('@USER')
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLogged: !!user,
        signIn,
        signOut,
        error,
        loading,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
