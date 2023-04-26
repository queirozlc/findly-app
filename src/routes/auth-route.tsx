import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../modules/authentication/screens/SignInScreen'
import SignUpScreen from '../modules/authentication/screens/SignUpScreen'
import { AuthPropsNavigation } from './types/auth-route'

const Stack = createNativeStackNavigator<AuthPropsNavigation>()

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name='ResetPassword' component={ResetPasswordScreen}/> */}
    </Stack.Navigator>
  )
}
