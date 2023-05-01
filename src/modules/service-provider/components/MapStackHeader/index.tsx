import { useNavigation } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MapStackNavigationProp } from '../../routes/stack/map-stack/types'

type Props = {
  title: string
}

export default function MapStackHeader({ title }: Props) {
  const navigation = useNavigation<MapStackNavigationProp>()

  return (
    <SafeAreaView className="bg-primary-500 py-3 items-center">
      <View className=" w-full flex-row relative justify-center items-center">
        <Text className="text-xl font-inter-black text-zinc-800">{title}</Text>
        <TouchableOpacity
          className="absolute left-4"
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../../../../assets/chevron_back.png')}
            resizeMode="contain"
            className=" h-7 w-7"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
