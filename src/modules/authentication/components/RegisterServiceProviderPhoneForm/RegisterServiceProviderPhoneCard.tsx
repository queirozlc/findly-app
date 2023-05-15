import { ReactNode } from 'react'
import { Text, View } from 'react-native'

export default function RegisterServiceProviderPhoneCard({
  children,
}: {
  children: ReactNode
}) {
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
          <View>
            <Text className="text-xl text-center font-poppins-black text-zinc-700">
              Enter your phone number
            </Text>
          </View>

          <View>{children}</View>
        </View>
      </View>
    </View>
  )
}
