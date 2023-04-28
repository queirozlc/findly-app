import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { AuthStackParamList } from '../../routes/types'

interface SignInFooterProps {
  view: 'sign-in' | 'sign-up'
}

export default function SignInFooter({ view }: SignInFooterProps) {
  const navigation = useNavigation<AuthStackParamList>()

  const handleNavigation = () => {
    if (view === 'sign-in') {
      navigation.navigate('SignUp')
    } else {
      navigation.navigate('SignIn')
    }
  }

  return (
    <View className="items-center justify-center space-y-4 px-6">
      <View>
        <Text className="font-inter-medium text-dark-gray-500 text-base">
          {view === 'sign-in'
            ? 'Don’t have an account?'
            : 'Already have an account?'}{' '}
          <Text
            className="text-brand-violet-500 underline font-poppins-bold"
            onPress={handleNavigation}
          >
            {view === 'sign-in' ? 'Sign Up' : 'Sign In'}
          </Text>
        </Text>
      </View>

      <View>
        <Text className="font-inter-regular text-sm text-center">
          By continuing, you agree to our{' '}
          <Text className="font-inter-regular text-sm underline">
            Terms and Conditions
          </Text>{' '}
          and{' '}
          <Text className="font-inter-regular text-sm underline">
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    </View>
  )
}
