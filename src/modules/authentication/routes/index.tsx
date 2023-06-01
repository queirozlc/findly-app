import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthBanner from '../components/AuthBanner'
import CompleteServiceProviderSignUpScreen from '../screens/CompleteServiceProviderSignUpScreen'
import CustomerBirthDateScreen from '../screens/CustomerBirthDateScreen'
import EmailSignInScreen from '../screens/EmailSignInScreen'
import EmailSignUpScreen from '../screens/EmailSignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import RegisterServiceProviderPhoneScreen from '../screens/RegisterServiceProviderPhoneScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import SignUpServiceProviderScreen from '../screens/SignUpServiceProviderScreen'
import VerificationCompleteScreen from '../screens/VerificationCompleteScreen'
import VerifyEmailScreen from '../screens/VerifyEmail'
import { AuthPropsNavigation } from './types'

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

        <Stack.Screen
          name="CustomerBirthDate"
          component={CustomerBirthDateScreen}
          options={{
            header() {
              return <AuthBanner />
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
