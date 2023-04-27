import { MaterialIcons } from '@expo/vector-icons'
import { Image, TouchableOpacity, View } from 'react-native'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import colors from 'tailwindcss/colors'
import { serviceProviderFavoriteState } from '../../../../shared/utils/state/atoms/service-provider-wish-state'
import { ServiceProviderData } from '../../utils/view-model/abstract-service-provider-presenter'

interface HomeCardProps {
  data: ServiceProviderData
}

export default function HomeCardThumbnail({ data }: HomeCardProps) {
  const wishedList = useRecoilValue(serviceProviderFavoriteState)
  const setWish = useSetRecoilState(serviceProviderFavoriteState)
  const wished = wishedList.find((item) => item.id === data.id)

  function handleWish(rateValue: boolean) {
    setWish((prev) => [
      ...prev.filter((item) => item.id !== data.id),
      {
        id: data.id,
        isRated: rateValue,
      },
    ])
  }

  return (
    <View className="relative flex-1">
      <Image
        source={data.thumbnail}
        style={{
          resizeMode: 'stretch',
          height: 300,
        }}
        className="w-full rounded-3xl flex-1"
      />
      <TouchableOpacity className="absolute right-4 top-4 bg-transparent">
        {wished?.isRated && wished.id === data.id ? (
          <MaterialIcons
            name="favorite"
            size={30}
            color={colors.yellow[500]}
            onPress={() => handleWish(!wished.isRated)}
          />
        ) : (
          <MaterialIcons
            name="favorite-outline"
            size={30}
            color={colors.zinc['400']}
            onPress={() => handleWish(!wished?.isRated)}
          />
        )}
      </TouchableOpacity>
    </View>
  )
}
