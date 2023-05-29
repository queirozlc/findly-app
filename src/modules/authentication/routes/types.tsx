import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type AuthPropsNavigation = {
  SignIn: undefined
  SignUp: undefined
  CustomerBirthDate: undefined
  ForgotPassword: undefined
  ResetPassword: undefined
  UsernamePasswordSignIn: undefined
  UsernamePasswordSignUp: undefined
  VerifyEmail: { code: string }
  VerificationComplete: undefined
  SignUpServiceProvider: undefined
  CompleteServiceProviderSignUp: undefined
  RegisterServiceProviderPhone: undefined
}

export type AuthStackParamList = NativeStackNavigationProp<AuthPropsNavigation>
