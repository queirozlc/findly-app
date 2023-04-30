import { AntDesign } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import { serviceProviderDetailState } from '../../../../shared/utils/state/atoms/service-provider-detail'

export default function MapViewServiceProviderCardInfo() {
  const serviceProviderData = useRecoilValue(serviceProviderDetailState)

  return (
    <>
      <View className="p-5 flex-row items-center justify-between">
        <Text className="font-poppins-bold text-xl text-zinc-700">
          {serviceProviderData?.name}
        </Text>
        <View className="flex-row items-center justify-between space-x-2">
          <AntDesign name="star" size={16} color={colors.yellow[500]} />
          <Text className="font-poppins-medium text-base text-dark-gray-500">
            {serviceProviderData?.averageRating}{' '}
          </Text>
        </View>
      </View>

      <View className="px-5 pb-5 flex-row items-center justify-between">
        <Text
          className="font-inter-medium text-sm text-left text-dark-gray-500"
          style={{ width: '80%' }}
        >
          {serviceProviderData?.description}
        </Text>

        <View className="flex-row items-center justify-between space-x-1.5 absolute right-2 top-2">
          <AntDesign name="phone" size={16} color={colors.zinc[500]} />
          <Text className="font-inter-medium text-base text-zinc-700">
            {serviceProviderData?.phoneNumber}
          </Text>
        </View>
      </View>
    </>
  )
}
