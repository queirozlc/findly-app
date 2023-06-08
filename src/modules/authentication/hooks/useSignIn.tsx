import { AuthenticationService } from '../infra/service/authentication-service'
import { useMutation } from 'react-query'
import { SignInRequest } from '../../../shared/types/sign-in-request'

export function useSignIn() {
  const service = new AuthenticationService()
  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: ({ email, password }: SignInRequest) =>
      service.signIn({ email, password }),
  })

  return {
    signInMutation: mutate,
    signInResponse: data,
    signInError: error,
    signInLoading: isLoading,
  }
}
