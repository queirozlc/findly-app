import { createContext, useState } from 'react'
import { SignInRequest } from '../../../shared/types/sign-in-request'
import { SignInResponse } from '../../../shared/types/sign-in-response'
import { User } from '../../../shared/types/user'
import { AuthenticationService } from '../infra/service/authentication-service'

export interface AuthenticationContextProps {
  isAuthenticated: boolean
  isLoading: boolean
  login: (data: SignInRequest) => Promise<SignInResponse>
  loginWithGoogle: () => Promise<void>
  logout: () => void
  register?: (data: any) => Promise<SignInResponse>
  user: User | null
}

export const AuthenticationContext = createContext<AuthenticationContextProps>(
  {} as AuthenticationContextProps,
)

export default function AuthenticationContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)
  const authService = new AuthenticationService('/auth')

  async function login(data: SignInRequest): Promise<SignInResponse> {
    const {
      data: { email, name, profileImage, sub, token },
    } = await authService.signIn(data)

    setUser({
      email,
      id: sub,
      name,
      profileImage,
      roles: [],
    })

    return {
      token,
      email,
      name,
      profileImage,
      sub,
    }
  }

  async function loginWithGoogle() {
    const { data } = await authService.signInWithGoogle()
    console.log(data)
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        isLoading: false,
        login,
        logout: () => {},
        loginWithGoogle,
        user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
