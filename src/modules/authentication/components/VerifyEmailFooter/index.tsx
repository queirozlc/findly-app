import { Text, View } from 'react-native'

export default function VerifyEmailFooter() {
  return (
    <View className="pt-3 space-y-5">
      <Text className="text-center text-base font-inter-bold text-dark-gray-500">
        Didn't receive the email?
      </Text>
      <Text className="text-center text-base font-poppins-black text-brand-violet-500 uppercase tracking-tighter underline">
        {' '}
        resend email
      </Text>
    </View>
  )
}
