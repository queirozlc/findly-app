import { Feather } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function OrderDetailsScreenOtherInformation() {
  return (
    <View className="space-y-4">
      <View className="flex-row items-center space-x-2">
        <Feather name="info" size={20} color={colors.zinc[500]} />
        <Text className="text-xl capitalize tracking-tight font-inter-black text-zinc-800">
          Other information
        </Text>
      </View>
      <View>
        <Text className="text-sm font-poppins-bold text-dark-gray-500">
          The payment will be made directly to us until the confirmation of the
          service, in case of cancellation the money will be returned to you
          immediately.
        </Text>
      </View>
    </View>
  )
}
