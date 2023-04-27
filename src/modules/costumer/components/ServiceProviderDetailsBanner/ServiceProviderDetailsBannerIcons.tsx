import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import colors from 'tailwindcss/colors'
import { serviceProviderFavoriteState } from '../../../../shared/utils/state/atoms/service-provider-wish-state'
import { ServiceProviderDetailsNavigationProps } from '../../routes/stack/service-provider-details/type'
import { ServiceProviderData } from '../../utils/view-model/abstract-service-provider-presenter'

interface Props {
  data: ServiceProviderData
}

export default function ServiceProviderDetailsBannerIcons({ data }: Props) {
  const wishedList = useRecoilValue(serviceProviderFavoriteState)
  const setWish = useSetRecoilState(serviceProviderFavoriteState)
  const navigation = useNavigation<ServiceProviderDetailsNavigationProps>()
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
    <View className="flex-row items-center justify-between">
      <View className="p-2 items-center justify-center bg-yellow-500 rounded-full">
        <Ionicons
          name="ios-chevron-back"
          size={28}
          color={colors.zinc[800]}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View className="flex-row items-center space-x-2">
        <View className="p-2 items-center justify-center bg-yellow-500 rounded-full">
          <Ionicons
            name="ios-share-outline"
            size={28}
            color={colors.zinc[800]}
          />
        </View>

        <View className="p-2 items-center justify-center bg-yellow-500 rounded-full">
          {wished?.isRated && wished.id === data.id ? (
            <Ionicons
              name="ios-heart"
              size={28}
              color={colors.zinc[800]}
              onPress={() => handleWish(!wished.isRated)}
            />
          ) : (
            <Ionicons
              name="ios-heart-outline"
              size={28}
              color={colors.zinc[800]}
              onPress={() => handleWish(!wished?.isRated)}
            />
          )}
        </View>
      </View>
    </View>
  )
}
