import { ImageBackground, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRecoilValue } from 'recoil'
import { serviceProviderDetailState } from '../../../../shared/utils/state/atoms/service-provider-detail'
import ServiceProviderDetailsBannerIcons from './ServiceProviderDetailsBannerIcons'

export default function ServiceProviderDetailsBanner() {
  const data = useRecoilValue(serviceProviderDetailState)

  return (
    <View>
      <ImageBackground
        source={data.thumbnail}
        className="w-full h-56"
        resizeMode="cover"
      >
        <SafeAreaView className="px-5 mt-2">
          <ServiceProviderDetailsBannerIcons data={data} />
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
