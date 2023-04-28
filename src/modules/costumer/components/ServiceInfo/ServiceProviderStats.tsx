import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import { serviceProviderDetailState } from '../../../../shared/utils/state/atoms/service-provider-detail'
import { ServiceProviderDetailsNavigationProps } from '../../routes/stack/service-provider-details/type'

export default function ServiceProviderStats() {
  const navigation = useNavigation<ServiceProviderDetailsNavigationProps>()
  const serviceProvider = useRecoilValue(serviceProviderDetailState)

  return (
    <View className="mt-4">
      <TouchableOpacity
        className="px-2 py-3 border border-zinc-300 active:bg-zinc-200 rounded-md"
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('Details', { data: serviceProvider })
        }
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <Image
              source={serviceProvider.thumbnail}
              resizeMode="cover"
              className="w-10 h-10 rounded-full"
            />
            <Text className="text-zinc-500 text-sm font-poppins-medium">
              {serviceProvider.name}
            </Text>
          </View>

          <View className="flex-row items-center space-x-2">
            <Feather name="star" size={20} color={colors.yellow[500]} />
            <Text className="text-yellow-500 text-sm font-poppins-medium">
              {serviceProvider.averageRating}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
