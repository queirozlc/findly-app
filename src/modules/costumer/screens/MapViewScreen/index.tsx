import { KeyboardAvoidingView, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import BottomSheetMapView from '../../components/BottomSheetMapView'
import { useMap } from '../../utils/hooks/useMap'
import { mapStyle } from '../MapScreen/styles'

export default function MapViewScreen() {
  const { mapRef, position } = useMap()
  const { latitude, longitude } = position!

  return (
    <View className="flex-1 bg-white">
      <KeyboardAvoidingView className="flex-1" behavior="padding" enabled>
        <MapView
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          className={`w-full absolute top-0 left-0 right-0 bottom-0`}
          showsUserLocation={true}
          followsUserLocation={true}
          ref={mapRef}
        />
        <BottomSheetMapView />
      </KeyboardAvoidingView>
    </View>
  )
}
