import { AuthenticationService } from '../infra/service/authentication-service'
import { useMutation } from 'react-query'
import { SignInRequest } from '../../../shared/types/sign-in-request'
import { AxiosError } from 'axios'
import { BaseHttpError } from '../../../shared/errors/BaseHttpError'
import { useState } from 'react'

export function useSignIn() {
  const [error, setError] = useState<string | undefined>(undefined)
  const service = new AuthenticationService()
  const { mutate, data, isLoading } = useMutation({
    mutationFn: (input: SignInRequest) => service.signIn(input),
    onError: (error: AxiosError<BaseHttpError>) => {
      setError(error.response?.data.message)
    },
  })

  return {
    signInMutation: mutate,
    signInResponse: data,
    signInError: error,
    signInLoading: isLoading,
  }
}
