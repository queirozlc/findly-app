import { useNavigation } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ServiceProviderDetailsNavigationProps } from '../../routes/stack/service-provider-details/type'
import { ServiceData } from '../../utils/models/abstract-service-presenter'

interface Props {
  data: ServiceData
}

export default function Services({ data }: Props) {
  const navigation = useNavigation<ServiceProviderDetailsNavigationProps>()

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate('ServiceDetails', { data })
      }}
    >
      <View className="py-5 px-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-2 space-y-3">
            <Text className="text-base capitalize font-inter-semi text-dark-gray-500">
              {data.title}
            </Text>
            <View className="pr-8">
              <Text className="text-sm font-body text-zinc-500">
                {data.description}
              </Text>
            </View>
          </View>

          <View>
            <Image
              source={data.image}
              resizeMode="contain"
              className="w-20 h-20"
            />
          </View>
        </View>

        <View className="flex-row items-center space-x-1 mt-2">
          <Text className="text-sm font-inter-semi text-dark-gray-500">
            <Text className="text-xs font-inter-regular text-zinc-600">R$</Text>{' '}
            {data.price}
          </Text>
        </View>
      </View>
      <View className="w-full h-0.5 bg-zinc-100 mt-2" />
    </TouchableOpacity>
  )
}
