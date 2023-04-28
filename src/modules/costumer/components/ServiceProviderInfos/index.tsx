import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { Image, Text, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import { serviceProviderDetailState } from '../../../../shared/utils/state/atoms/service-provider-detail'

export default function ServiceProviderInfos() {
  const data = useRecoilValue(serviceProviderDetailState)

  return (
    <View>
      <View className="px-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-inter-semi text-dark-gray-500">
            {data.name}
          </Text>
          <Image
            source={data.thumbnail}
            resizeMode="cover"
            className="w-16 h-16 rounded-full"
          />
        </View>

        <Text className="text-sm font-inter-regular text-zinc-500">
          {data.description}
        </Text>

        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row items-center space-x-2">
            <Text className="text-sm font-inter-semi text-dark-gray-500">
              {data.averageRating}
            </Text>

            <FontAwesome name="star" size={16} color={colors.yellow[500]} />
            <FontAwesome name="star" size={16} color={colors.yellow[500]} />
            <FontAwesome name="star" size={16} color={colors.yellow[500]} />
            <FontAwesome name="star" size={16} color={colors.yellow[500]} />

            <FontAwesome5
              name="star-half-alt"
              size={16}
              color={colors.yellow[500]}
            />
          </View>

          <View className="flex-row items-center space-x-2">
            <FontAwesome name="phone" size={16} color={colors.zinc[500]} />
            <Text className="text-sm font-inter-regular text-zinc-500">
              {data.phoneNumber}
            </Text>
          </View>
        </View>
      </View>
      <View className="w-full h-0.5 bg-zinc-100 mt-10" />
    </View>
  )
}
