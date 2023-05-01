import { Ionicons } from '@expo/vector-icons'
import { BottomSheetView } from '@gorhom/bottom-sheet'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import OrderNotificationAddressInfo from './OrderNotificationAddressInfo'
import OrderNotificationButtons from './OrderNotificationButtons'
import OrderNotificationDistanceInfo from './OrderNotificationDistanceInfo'

export default function OrderNotificationContent() {
  return (
    <BottomSheetView>
      <View className="w-full h-full bg-white px-5 py-2 space-y-6">
        {/* Bottom Sheet Title */}
        <View className="items-center flex-row justify-between">
          <Text className="font-inter-black text-xl text-zinc-900">
            Order Notification
          </Text>
          <Ionicons
            name="md-notifications-circle-outline"
            size={32}
            color={colors.zinc[500]}
          />
        </View>

        <View>
          <OrderNotificationAddressInfo />
        </View>

        <View>
          <OrderNotificationDistanceInfo />
        </View>

        <View>
          <OrderNotificationButtons />
        </View>
      </View>
    </BottomSheetView>
  )
}
