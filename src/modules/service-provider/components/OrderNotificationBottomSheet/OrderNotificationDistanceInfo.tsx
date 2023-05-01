import { Text, View } from 'react-native'

export default function OrderNotificationDistanceInfo() {
  return (
    <View className="flex-row items-center justify-evenly">
      <View className="space-y-2">
        <Text className="font-inter-medium text-sm text-zinc-400">
          Arrival Time
        </Text>
        <Text className="font-poppins-semi text-base text-zinc-900">
          {/* Need change to time to arrive based on distance calculation */}
          10:45 AM
        </Text>
      </View>

      {/* Separator */}
      <View className="w-px h-12 bg-zinc-500/50" />

      <View className="space-y-2">
        <Text className="font-inter-medium text-sm text-zinc-400">
          Distance
        </Text>
        <Text className="font-poppins-semi text-base text-zinc-900">
          {/* Need change to distance based on some distance calculation api */}
          1.2 km
        </Text>
      </View>
    </View>
  )
}
