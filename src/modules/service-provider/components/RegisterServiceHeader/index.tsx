import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RegisterServiceNavigationProps } from '../../routes/stack/register-service/types'

type RegisterServiceHeaderProps = {
  label: string
  canGoBack?: boolean
}

export default function RegisterServiceHeader({
  label,
  canGoBack,
}: RegisterServiceHeaderProps) {
  const navigation = useNavigation<RegisterServiceNavigationProps>()

  return (
    <SafeAreaView className="justify-center flex-row-reverse py-2 bg-primary-500">
      <Text className="text-lg font-inter-black text-zinc-800 capitalize">
        {label}
      </Text>

      {canGoBack && (
        <View className="relative h-full">
          <TouchableOpacity
            className="absolute -left-20"
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="ios-chevron-back-circle-outline"
              size={32}
              color="black"
            />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  )
}
