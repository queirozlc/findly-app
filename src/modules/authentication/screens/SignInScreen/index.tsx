import { MaterialIcons } from '@expo/vector-icons'
import { View } from 'react-native'
import Button from '../../../../shared/components/Button'
import AuthBanner from '../../components/AuthBanner'

export default function SignInScreen() {
  return (
    <View className="space-y-24">
      <AuthBanner />
      <View className="px-8">
        <Button
          title="Logout"
          icon={<MaterialIcons name="logout" size={24} color="black" />}
          variant="solid"
        />
      </View>
    </View>
  )
}
