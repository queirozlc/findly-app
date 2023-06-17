import { AxiosError } from 'axios'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { BaseHttpError } from '../../../shared/errors/BaseHttpError'
import { SignInRequest } from '../../../shared/types/sign-in-request'
import { AuthenticationService } from '../infra/service/authentication-service'

export function useSignIn() {
  const [error, setError] = useState<string | undefined>(undefined)
  const service = new AuthenticationService()
  const { mutate, data, isLoading } = useMutation({
    mutationFn: (input: SignInRequest) => service.signIn(input),
    onError: (error: AxiosError<BaseHttpError>) => {
      console.log(error.response)
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
