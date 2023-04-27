import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from 'tailwindcss/colors'
import { ServiceProviderDetailsNavigationProps } from '../../routes/stack/service-provider-details/type'
import { ServiceProviderData } from '../../utils/view-model/abstract-service-provider-presenter'

type Props = {
  data: ServiceProviderData
}

export default function ServiceProviderDetailsBanner({ data }: Props) {
  const navigation = useNavigation<ServiceProviderDetailsNavigationProps>()

  return (
    <View className="bg-red-500">
      <ImageBackground
        source={data.thumbnail}
        className="w-full h-56"
        resizeMode="cover"
      >
        <SafeAreaView className="px-5 mt-2">
          <View className="flex-row items-center justify-between">
            <View className="p-2 items-center justify-center bg-yellow-500 rounded-full">
              <Ionicons
                name="ios-chevron-back"
                size={28}
                color={colors.zinc[800]}
                onPress={() => navigation.goBack()}
              />
            </View>
            <View className="flex-row items-center space-x-2">
              <View className="p-2 items-center justify-center bg-yellow-500 rounded-full">
                <Ionicons
                  name="ios-share-outline"
                  size={28}
                  color={colors.zinc[800]}
                />
              </View>

              <View className="p-2 items-center justify-center bg-yellow-500 rounded-full">
                <Ionicons
                  name="ios-heart-outline"
                  size={28}
                  color={colors.zinc[800]}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
