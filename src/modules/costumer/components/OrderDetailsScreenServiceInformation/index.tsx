import { useNavigation } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ServiceProviderDetailsNavigationProps } from '../../routes/stack/service-provider-details/type'
import { ServiceData } from '../../utils/view-model/abstract-service-presenter'

interface Props {
  order: ServiceData
}

export default function OrderDetailsScreenServiceInformation({ order }: Props) {
  const navigation = useNavigation<ServiceProviderDetailsNavigationProps>()

  return (
    <TouchableOpacity
      className="flex-row items-center p-2 space-x-4 border border-zinc-200 rounded-lg"
      onPress={() => navigation.navigate('ServiceDetails', { data: order })}
      activeOpacity={0.75}
    >
      <Image
        source={order?.image}
        resizeMode="contain"
        className="w-12 h-12 rounded-lg"
      />
      <View className="space-y-2">
        <Text className="text-base font-inter-medium text-zinc-800">
          {order.title}
        </Text>
        <Text className="text-sm font-poppins-bold text-dark-gray-500">
          R$ {order.price}
        </Text>
      </View>

      <View className="flex-1 flex-row justify-end">
        <Text className="text-sm font-poppins-bold text-dark-gray-500"></Text>
      </View>
    </TouchableOpacity>
  )
}
