import { Text, View } from 'react-native'

interface Props {
  children: React.ReactNode
}

export default function EmailVerifyInputCard({ children }: Props) {
  return (
    <View className="px-4">
      <View
        className="w-full px-4 py-6 bg-white rounded-xl space-y-4"
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowRadius: 1,
          shadowOpacity: 0.2,
          elevation: 5,
        }}
      >
        <View className="space-y-4">
          <View className="space-y-2">
            <Text className="text-xl text-center font-poppins-black text-zinc-700">
              Enter your verification code
            </Text>

            <Text className="text-center text-sm text-zinc-500 font-inter-medium">
              We have sent a verification code to your email address
            </Text>
          </View>

          <View>{children}</View>
        </View>
      </View>
    </View>
  )
}
