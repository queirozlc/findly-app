import { Text, TouchableOpacity, View } from 'react-native'
import { useAuth } from '../../../authentication/hooks/useAuth'

export default function ProfileScreen() {
  const { signOut } = useAuth()

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <TouchableOpacity
        className="bg-blue-500 px-5 py-3 rounded-md shadow-md text-white"
        onPress={signOut}
      >
        <Text className="text-white font-inter-bold text-lg">Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
