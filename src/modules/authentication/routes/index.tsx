import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CompleteSignUpScreen from '../screens/CompleteSignUpScreen'
import EmailSignInScreen from '../screens/EmailSignInScreen'
import EmailSignUpScreen from '../screens/EmailSignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import { AuthPropsNavigation } from './types'
import VerifyEmailScreen from '../screens/VerifyEmail'

const Stack = createNativeStackNavigator<AuthPropsNavigation>()

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="UsernamePasswordSignIn"
        component={EmailSignInScreen}
      />
      <Stack.Screen
        name="UsernamePasswordSignUp"
        component={EmailSignUpScreen}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="CompleteSignUp" component={CompleteSignUpScreen} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
    </Stack.Navigator>
  )
}
