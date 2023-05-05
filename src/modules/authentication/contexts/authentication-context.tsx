import {
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_REDIRECT_URI,
  GOOGLE_OAUTH_RESPONSE_TYPE,
  GOOGLE_OAUTH_SCOPE,
} from '@env'
import * as AuthSession from 'expo-auth-session'
import { createContext, useState } from 'react'
import { SignInRequest } from '../../../shared/types/sign-in-request'
import { SignInResponse } from '../../../shared/types/sign-in-response'
import { User } from '../../../shared/types/user'
import { AuthenticationService } from '../infra/service/authentication-service'

export interface AuthenticationContextProps {
  isAuthenticated: boolean
  isLoading: boolean
  login: (data: SignInRequest) => Promise<SignInResponse>
  loginWithGoogle: () => Promise<OAuthResponse | undefined>
  logout: () => void
  OauthResponse: OAuthResponse | null
  user: User | null
}

export const AuthenticationContext = createContext<AuthenticationContextProps>(
  {} as AuthenticationContextProps,
)

interface OAuthResponse {
  type: string
  params: {
    access_token: string
  }
}

export default function AuthenticationContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)
  const authService = new AuthenticationService()
  const [OauthResponse, setOauthResponse] = useState<OAuthResponse | null>(null)

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
    const CLIENT_ID = GOOGLE_OAUTH_CLIENT_ID
    const REDIRECT_URI = GOOGLE_OAUTH_REDIRECT_URI
    const RESPONSE_TYPE = GOOGLE_OAUTH_RESPONSE_TYPE
    const SCOPE = encodeURI(GOOGLE_OAUTH_SCOPE)

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&prompt=consent`
    const response = (await AuthSession.startAsync({
      authUrl,
    })) as OAuthResponse

    if (response.type === 'success') {
      setOauthResponse(response)
    } else {
      return
    }
    return response
  }

  async function logout() {
    setUser(null)
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        isLoading: false,
        login,
        logout,
        loginWithGoogle,
        user,
        OauthResponse,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
