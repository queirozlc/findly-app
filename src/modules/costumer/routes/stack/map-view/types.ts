import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type MapViewStackParamList = {
  MapView: undefined
}

export type MapViewRouteProp = RouteProp<MapViewStackParamList, 'MapView'>
export type MapViewNavigationProp =
  NativeStackNavigationProp<MapViewStackParamList>
