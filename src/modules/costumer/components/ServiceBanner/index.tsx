import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import { serviceDetailsState } from '../../../../shared/utils/state/atoms/service-state'
import { ServiceProviderDetailsNavigationProps } from '../../routes/stack/service-provider-details/type'

export default function ServiceBanner() {
  const navigation = useNavigation<ServiceProviderDetailsNavigationProps>()
  const data = useRecoilValue(serviceDetailsState)

  return (
    <View>
      <ImageBackground
        source={data.image}
        resizeMode="cover"
        className="w-full h-60"
      >
        <SafeAreaView className="mt-4 px-5">
          <View className="p-2 items-center w-12  bg-yellow-500 rounded-full">
            <Ionicons
              name="ios-chevron-back"
              size={28}
              color={colors.zinc[800]}
              onPress={() => navigation.goBack()}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
