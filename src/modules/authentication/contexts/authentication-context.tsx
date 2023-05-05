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
import { CreateCostumerRequest } from '../../costumer/api/dtos/create-costumer-request'
import { CostumerApiService } from '../../costumer/api/services/costumer-api'
import { AxiosError } from 'axios'
import { VerificationCodeRequest } from '../infra/dtos/verification-code-request'
import { GoogleOAuthResponse } from '../infra/dtos/google-oauth-response'
import { VerificationCode } from '../../../shared/types/verification-code'

export interface AuthenticationContextProps {
  isAuthenticated: boolean
  isLoading: boolean
  login: (data: SignInRequest) => Promise<SignInResponse>
  loginWithGoogle: () => Promise<GoogleOAuthResponse | undefined>
  logout: () => void
  OauthResponse: GoogleOAuthResponse | null
  user: User | null
  createCostumer: (data: CreateCostumerRequest) => Promise<VerificationCode>
  verifyCode: (data: { code: string }) => Promise<void>
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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const authService = new AuthenticationService()
  const costumerService = new CostumerApiService()
  const [OauthResponse, setOauthResponse] =
    useState<GoogleOAuthResponse | null>(null)

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
    })) as GoogleOAuthResponse

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

  async function createCostumer(
    data: CreateCostumerRequest,
  ): Promise<VerificationCode> {
    setIsLoading(true)
    try {
      const { data: responseData } = await costumerService.createCostumer(data)
      setIsLoading(false)
      return responseData
    } catch (error) {
      const { response } = error as AxiosError
      console.log(response?.data)
    } finally {
      setIsLoading(false)
    }
    return {} as VerificationCode
  }

  async function verifyCode({ code }: VerificationCodeRequest) {
    setIsLoading(true)
    try {
      await authService.verifyCode({ code })
      setIsLoading(false)
    } catch (error) {
      const { response } = error as AxiosError
      console.log(response?.data)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        loginWithGoogle,
        user,
        OauthResponse,
        createCostumer,
        verifyCode,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
