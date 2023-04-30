import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'
import { useRecoilState, useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import { serviceProviderDetailState } from '../../../../shared/utils/state/atoms/service-provider-detail'
import { serviceProviderFavoriteState } from '../../../../shared/utils/state/atoms/service-provider-wish-state'

export default function MapViewServiceProviderBannerIcon() {
  const [wishList, setWishState] = useRecoilState(serviceProviderFavoriteState)
  const serviceProviderData = useRecoilValue(serviceProviderDetailState)
  const wished = wishList.find((item) => item.id === serviceProviderData?.id)

  function handleWishState(rateValue: boolean) {
    setWishState((prev) => [
      ...prev.filter((item) => item.id !== serviceProviderData?.id),
      {
        id: serviceProviderData?.id!,
        isRated: rateValue,
      },
    ])
  }

  return (
    <View className="absolute top-5 right-5 p-2.5 bg-primary-500 rounded-full">
      {wished?.isRated && wished.id === serviceProviderData?.id ? (
        <AntDesign
          name="heart"
          size={24}
          color={colors.zinc[800]}
          onPress={() => handleWishState(!wished.isRated)}
        />
      ) : (
        <AntDesign
          name="hearto"
          size={24}
          color={colors.zinc[800]}
          onPress={() => handleWishState(!wished?.isRated)}
        />
      )}
    </View>
  )
}
