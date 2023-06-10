import { User } from '../../../shared/types/user'
import { SignInRequest } from '../../../shared/types/sign-in-request'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { useSignIn } from '../hooks/useSignIn'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApiService } from '../../../shared/services/api-service'
import jwtDecode from 'jwt-decode'
import { JwtPayload } from '../infra/dtos/jwt-payload'

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
  const [loading, setLoading] = useState(true)
  const { signInMutation, signInResponse, signInError, signInLoading } =
    useSignIn()

  async function signIn(input: SignInRequest): Promise<void> {
    signInMutation(input)
    if (!signInResponse) {
      if (signInError) {
        setError(signInError)
      }
      return
    }

    const payload = jwtDecode<JwtPayload>(signInResponse.data.token)

    const { data } = signInResponse
    setUser({
      ...data,
      roles: payload.roles,
      id: data.sub,
    })
    await AsyncStorage.setItem('@USER', JSON.stringify(data))
    ApiService.registerJwtInterceptor(data.token)
  }

  async function signOut() {
    setUser(null)
    await AsyncStorage.removeItem('@USER')
  }

  useEffect(() => {
    // async function loadStorageData() {
    //   const user = await AsyncStorage.getItem('@USER')
    //   if (user) {
    //     setUser(JSON.parse(user))
    //   }
    //   setLoading(false)
    // }
    // loadStorageData()
  }, [])

  // if (loading) {
  //   return <></>
  // }

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
