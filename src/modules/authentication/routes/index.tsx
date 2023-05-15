import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EmailSignInScreen from '../screens/EmailSignInScreen'
import EmailSignUpScreen from '../screens/EmailSignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import { AuthPropsNavigation } from './types'
import VerifyEmailScreen from '../screens/VerifyEmail'
import VerificationCompleteScreen from '../screens/VerificationCompleteScreen'
import SignUpServiceProviderScreen from '../screens/SignUpServiceProviderScreen'
import CompleteServiceProviderSignUpScreen from '../screens/CompleteServiceProviderSignUpScreen'
import AuthBanner from '../components/AuthBanner'
import RegisterServiceProviderPhoneScreen from '../screens/RegisterServiceProviderPhoneScreen'

const Stack = createNativeStackNavigator<AuthPropsNavigation>()

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        animation: 'slide_from_right',
      }}
      initialRouteName={'RegisterServiceProviderPhone'}
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
      <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
      <Stack.Screen
        name="VerificationComplete"
        component={VerificationCompleteScreen}
      />

      {/*
        Routes to be used by service providers only.
      */}
      <Stack.Group
        screenOptions={{
          headerShown: true,
          header() {
            return <AuthBanner />
          },
        }}
      >
        <Stack.Screen
          name={'SignUpServiceProvider'}
          component={SignUpServiceProviderScreen}
        />
        <Stack.Screen
          name={'CompleteServiceProviderSignUp'}
          component={CompleteServiceProviderSignUpScreen}
        />
        <Stack.Screen
          name={'RegisterServiceProviderPhone'}
          component={RegisterServiceProviderPhoneScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
