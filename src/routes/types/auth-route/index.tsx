import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type AuthPropsNavigation = {
  SignIn: undefined
  SignUp: undefined
  ForgotPassword: undefined
  ResetPassword: undefined
  UsernamePasswordSignIn: undefined
}

export type AuthStackParamList = NativeStackNavigationProp<AuthPropsNavigation>
