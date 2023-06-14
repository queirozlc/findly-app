import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

export default function RegisterServiceImagePicker() {
  return (
    <View className={'items-center py-10 space-y-4'}>
      <TouchableOpacity
        className={
          'w-24 h-24 bg-lightest-gray-500 rounded-full flex items-center justify-center'
        }
      >
        {/*
            Camera icon
          */}
        <MaterialCommunityIcons
          name="camera-plus-outline"
          size={44}
          color="black"
        />
      </TouchableOpacity>

      <Text className={'text-xl font-inter-medium text-zinc-800'}>
        Imagem do serviço
      </Text>
    </View>
  )
}
