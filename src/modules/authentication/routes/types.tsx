import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type AuthPropsNavigation = {
  SignIn: undefined
  SignUp: undefined
  ForgotPassword: undefined
  ResetPassword: undefined
  UsernamePasswordSignIn: undefined
  UsernamePasswordSignUp: undefined
  VerifyEmail: undefined
  VerificationComplete: undefined
  SignUpServiceProvider: undefined
  CompleteServiceProviderSignUp: undefined
  RegisterServiceProviderPhone: undefined
}

export type AuthStackParamList = NativeStackNavigationProp<AuthPropsNavigation>
