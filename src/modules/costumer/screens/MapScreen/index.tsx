import { useEffect } from 'react'
import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import BottomSheetHomeFlatList from '../../components/BottomSheetHomeFlatList'
import Layout from '../../components/Layout'
import { useMap } from '../../utils/hooks/useMap'
import useSocket from '../../utils/hooks/useSocket'
import { mapStyle } from './styles'

export default function MapScreen() {
  const { mapRef, permissionMessage, position } = useMap()
  const { socket } = useSocket()

  function sendPosition() {
    if (position) {
      socket.emit('costumer:position', {
        latitude: position.latitude,
        longitude: position.longitude,
      })
    }
  }

  useEffect(() => {
    sendPosition()
  }, [])

  return (
    <View className="flex-1 bg-white">
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        className={`w-full absolute top-0 left-0 right-0 bottom-0`}
        ref={mapRef}
        showsUserLocation={true}
        followsUserLocation={true}
      />
      <Layout />
      <BottomSheetHomeFlatList />
    </View>
  )
}
