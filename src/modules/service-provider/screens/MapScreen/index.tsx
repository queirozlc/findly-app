import { API_URL } from '@env'
import { useEffect, useMemo } from 'react'
import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { io, Socket } from 'socket.io-client'
import OrderNotificationBottomSheet from '../../components/OrderNotificationBottomSheet'
import { useMap } from '../../hooks/useMap'
import { mapStyle } from './styles'

export default function MapScreen() {
  const { mapRef, position } = useMap()
  const socket = useMemo<Socket>(() => io(`${API_URL}/service-provider`), [])

  function sendPositionData() {
    if (position) {
      socket.emit('service-provider:position', {
        // Mush have a service provider id here on future
        latitude: position.latitude,
        longitude: position.longitude,
      })
    }
  }

  useEffect(() => {
    sendPositionData()
  }, [position])

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
