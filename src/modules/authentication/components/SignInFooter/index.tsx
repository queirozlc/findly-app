import { Text, View } from 'react-native'

export default function SignInFooter() {
  return (
    <View className="items-center justify-center space-y-8 px-6">
      <View>
        <Text className="font-inter-medium text-dark-gray-500 text-base">
          Don't have an account ?{' '}
          <Text className="text-brand-violet-500 underline font-inter-bold">
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
