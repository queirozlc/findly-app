import { Feather } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import { serviceProviderDetailState } from '../../../../shared/utils/state/atoms/service-provider-detail'
import { serviceDetailsState } from '../../../../shared/utils/state/atoms/service-state'
import ServiceNote from './ServiceNote'
import ServiceProviderStats from './ServiceProviderStats'

export default function ServiceInfo() {
  const data = useRecoilValue(serviceDetailsState)
  const serviceProvider = useRecoilValue(serviceProviderDetailState)

  return (
    <View className="mt-8 px-5 space-y-3">
      <Text className="text-xl capitalize font-inter-semi">{data.title}</Text>
      <Text className="text-zinc-500 text-sm font-poppins-medium">
        {data.description}
      </Text>

      <View className="pt-5 flex-row items-center justify-between">
        <Text className="text-zinc-800 text-base font-poppins-medium">
          <Text className="text-zinc-600 text-sm font-body">R$ </Text>
          {data.price}
        </Text>

        <View className="flex-row items-center space-x-2">
          <Feather name="phone" size={20} color={colors.zinc[500]} />
          <Text className="text-zinc-500 text-sm font-poppins-medium">
            {serviceProvider.phoneNumber}
          </Text>
        </View>
      </View>

      <View>
        <ServiceProviderStats />
      </View>

      <View>
        <ServiceNote />
      </View>
    </View>
  )
}
