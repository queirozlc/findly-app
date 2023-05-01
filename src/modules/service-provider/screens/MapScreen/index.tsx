import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { useMap } from '../../../costumer/utils/hooks/useMap'
import { mapStyle } from './styles'

export default function MapScreen() {
  const { mapRef } = useMap()

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
    </View>
  )
}
