import { Ionicons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function OrderNotificationAddressInfo() {
  return (
    <View className="flex-row items-center space-x-2.5">
      <View className="p-2 rounded-full bg-lightest-gray-500/50">
        <Ionicons name="md-location" size={24} color={colors.white[200]} />
      </View>
      <View className="flex-1">
        <Text className="font-inter-medium text-base text-zinc-900">
          {/* Need change to costumer address, data will be received through websocket  */}
          1234, Street Name, City Name, State Name, Country Name
        </Text>
      </View>
    </View>
  )
}
