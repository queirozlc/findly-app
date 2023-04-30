import {
  getCurrentPositionAsync,
  getForegroundPermissionsAsync,
  LocationObjectCoords,
  requestForegroundPermissionsAsync,
} from 'expo-location'
import { useEffect, useRef, useState } from 'react'
import MapView, { Camera } from 'react-native-maps'
import { useSetRecoilState } from 'recoil'
import { costumerPositionState } from '../../../../shared/utils/state/atoms/costumer-position-state'

export function useMap() {
  const [permissionMessage, setPermissionMessage] = useState('')
  const [position, setPosition] = useState<LocationObjectCoords>()
  const mapRef = useRef<MapView>(null)
  const setPositionState = useSetRecoilState(costumerPositionState)

  useEffect(() => {
    async function requestPermissions() {
      const foreground = await requestForegroundPermissionsAsync()

      if (foreground.granted) {
        startForegroundUpdate()
      }
    }

    requestPermissions()
  }, [])

  async function startForegroundUpdate() {
    const { granted } = await getForegroundPermissionsAsync()

    if (!granted) {
      setPermissionMessage('Permission denied')
      return
    }

    const location = await getCurrentPositionAsync() // Need to be changed to real time location
    setPosition(location.coords)
    setPositionState(location.coords)
    const newCamera: Camera = {
      center: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      zoom: 15,
      heading: 0,
      pitch: 0,
      altitude: 0,
    }

    mapRef.current?.animateCamera(newCamera, { duration: 1000 })
  }

  return {
    permissionMessage,
    position,
    mapRef,
  }
}
