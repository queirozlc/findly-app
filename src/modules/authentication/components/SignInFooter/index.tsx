import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { AuthStackParamList } from '../../../../routes/types/auth-route'

export default function SignInFooter() {
  const navigation = useNavigation<AuthStackParamList>()

  return (
    <View className="items-center justify-center space-y-8 px-6">
      <View>
        <Text className="font-inter-medium text-dark-gray-500 text-base">
          Don't have an account ?{' '}
          <Text
            className="text-brand-violet-500 underline font-inter-bold"
            onPress={() => navigation.navigate('SignUp')}
          >
            Sign Up
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
