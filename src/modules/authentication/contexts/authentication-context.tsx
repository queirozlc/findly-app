import AsyncStorage from '@react-native-async-storage/async-storage'
import { AxiosResponse } from 'axios'
import jwtDecode from 'jwt-decode'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { ApiService } from '../../../shared/services/api-service'
import { SignInResponse } from '../../../shared/types/sign-in-response'
import { User } from '../../../shared/types/user'
import { JwtPayload } from '../infra/dtos/jwt-payload'

type Output = {
  user: User | null
  isLogged: boolean
  signOut: () => Promise<void>
  handleSuccessLogin: (response: AxiosResponse<SignInResponse>) => Promise<void>
}

export const AuthenticationContext = createContext<Output>({} as Output)

type Props = {
  children: ReactNode
}

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null)

  async function signOut() {
    setUser(null)
    await AsyncStorage.removeItem('@USER')
  }

  async function handleSuccessLogin(response: AxiosResponse<SignInResponse>) {
    const payload = jwtDecode<JwtPayload>(response.data.token)
    const { data } = response
    setUser({
      ...data,
      roles: payload.roles,
      id: data.sub,
    })
    await AsyncStorage.setItem('@USER', JSON.stringify(data))
    ApiService.registerJwtInterceptor(data.token)
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
        signOut,
        handleSuccessLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
