import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import { AppNavigationProps } from '../../../../shared/routes/app-route-type'
import { serviceProviderDetailState } from '../../../../shared/utils/state/atoms/service-provider-detail'
import MapViewServiceProviderBannerIcon from './MapViewServiceProviderBannerIcon'
import MapViewServiceProviderCardInfo from './MapViewServiceProviderCardInfo'

export default function MapViewServiceProviderCard() {
  const navigation = useNavigation<AppNavigationProps>()
  const serviceProviderData = useRecoilValue(serviceProviderDetailState)

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`bg-white rounded-2xl ${
        serviceProviderData ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        display: serviceProviderData ? 'flex' : 'none',
      }}
      onPress={() => {
        navigation.navigate('CostumerServiceProviderDetailsStack', {
          screen: 'Details',
          params: { data: serviceProviderData! },
        })
      }}
    >
      <View className="relative">
        <Image
          source={serviceProviderData?.thumbnail}
          resizeMode="contain"
          className="w-full h-60 rounded-t-2xl"
        />
        {/* Favorite Button */}
        <MapViewServiceProviderBannerIcon />
      </View>

      <MapViewServiceProviderCardInfo />
    </TouchableOpacity>
  )
}
