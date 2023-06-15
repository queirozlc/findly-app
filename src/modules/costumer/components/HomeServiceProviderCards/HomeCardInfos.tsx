import { AntDesign, Entypo } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { ServiceProviderData } from '../../utils/models/abstract-service-provider-presenter'

interface HomeCardInfosProps {
  data: ServiceProviderData
}

export default function HomeCardInfos({ data }: HomeCardInfosProps) {
  return (
    <View>
      <View className=" px-5 py-3">
        <View className="flex-row justify-between items-center">
          <Text className="font-inter-semi text-base">{data.name}</Text>
          <View className="flex-row items-center space-x-1">
            <AntDesign name="star" size={24} color={colors.yellow[500]} />
            <Text className="font-inter-medium text-base mt-1">
              {data.averageRating}
            </Text>
          </View>
        </View>

        {data.description && (
          <View>
            <Text className="font-inter-regular text-base text-zinc-400 mt-2">
              {data.description}
            </Text>
          </View>
        )}

        <View className="flex-row items-center space-x-2 mt-2">
          <Entypo name="phone" size={20} color={colors.yellow[500]} />
          <Text className="font-inter-regular text-sm text-zinc-400">
            {data.phoneNumber}
          </Text>
        </View>
      </View>
    </View>
  )
}
