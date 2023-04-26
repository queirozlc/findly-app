import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EmailSignInScreen from '../modules/authentication/screens/EmailSignInScreen'
import EmailSignUpScreen from '../modules/authentication/screens/EmailSignUpScreen'
import ForgotPasswordScreen from '../modules/authentication/screens/ForgotPasswordScreen'
import SignInScreen from '../modules/authentication/screens/SignInScreen'
import SignUpScreen from '../modules/authentication/screens/SignUpScreen'
import { AuthPropsNavigation } from './types/auth-route'

const Stack = createNativeStackNavigator<AuthPropsNavigation>()

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
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
    </Stack.Navigator>
  )
}
