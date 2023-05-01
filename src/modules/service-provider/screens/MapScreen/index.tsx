import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import OrderNotificationBottomSheet from '../../components/OrderNotificationBottomSheet'
import { useMap } from '../../hooks/useMap'
import { mapStyle } from './styles'

export default function MapScreen() {
  const { mapRef, position } = useMap()

  return (
    <View className="flex-1">
      <MapView
        ref={mapRef}
        followsUserLocation
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        customMapStyle={mapStyle}
        className="w-full absolute inset-x-0 inset-y-0"
      />

      <OrderNotificationBottomSheet />
    </View>
  )
}
