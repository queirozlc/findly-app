import { ImageBackground, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ServiceProviderData } from '../../utils/view-model/abstract-service-provider-presenter'
import ServiceProviderDetailsBannerIcons from './ServiceProviderDetailsBannerIcons'

type Props = {
  data: ServiceProviderData
}

export default function ServiceProviderDetailsBanner({ data }: Props) {
  return (
    <View className="bg-red-500">
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
