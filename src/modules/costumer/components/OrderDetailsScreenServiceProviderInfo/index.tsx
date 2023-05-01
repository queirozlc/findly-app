import { Feather } from '@expo/vector-icons'
import { Image, Text, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import { serviceProviderDetailState } from '../../../../shared/utils/state/atoms/service-provider-detail'

export default function OrderDetailsScreenServiceProviderInfo() {
  const serviceProviderData = useRecoilValue(serviceProviderDetailState)

  return (
    <View className="flex-row items-center space-x-2">
      <Image
        source={serviceProviderData?.thumbnail}
        resizeMode="cover"
        className="w-10 h-10 rounded-full"
      />
      <View className="space-y-2">
        <Text className="text-base font-inter-semi text-dark-gray-500">
          {serviceProviderData?.name}
        </Text>
        <View className="flex-row items-center space-x-2">
          <Feather name="phone" size={16} color={colors.zinc[400]} />
          <Text className="text-sm font-inter-semi text-dark-gray-500">
            {serviceProviderData?.phoneNumber}
          </Text>
        </View>
      </View>
    </View>
  )
}
