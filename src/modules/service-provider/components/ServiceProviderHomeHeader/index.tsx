import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { useSetRecoilState } from 'recoil'
import { notificationBottomSheetIndexState } from '../../store/atoms/notifications-bottom-sheet-index'

export default function ServiceProviderHomeHeader() {
  const setNotificationsBottomSheetIndex = useSetRecoilState(
    notificationBottomSheetIndexState,
  )
  const [hasNewNotifications] = useState(true)

  function handleBottomSheet() {
    if (hasNewNotifications) {
      setNotificationsBottomSheetIndex(1)
    } else {
      return
    }
  }

  return (
    <View className="justify-center items-center flex-row relative py-3.5 bg-white">
      <Text className="text-lg font-inter-black text-zinc-800">
        Today's Orders
      </Text>

      <View className="absolute right-4 top-4">
        <View className="relative">
          <Ionicons
            name="ios-notifications-outline"
            size={28}
            color="black"
            onPress={handleBottomSheet}
          />
          {hasNewNotifications && (
            <View className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-yellow-500 rounded-full flex items-center justify-center" />
          )}
        </View>
      </View>
    </View>
  )
}