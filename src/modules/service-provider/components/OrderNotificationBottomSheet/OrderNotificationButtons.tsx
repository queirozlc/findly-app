import { View } from 'react-native'
import Button from '../../../../shared/components/Button'

export default function OrderNotificationButtons() {
  return (
    <View className="items-center space-y-2">
      <View className="w-full">
        <Button title="Accept" variant="solid" />
      </View>
      <View className="w-full">
        <Button title="Decline" variant="orderNotification" />
      </View>
    </View>
  )
}
