import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MapViewScreen from '../../../screens/MapViewScreen'
import { MapViewStackParamList } from './types'

const Stack = createNativeStackNavigator<MapViewStackParamList>()

export default function MapViewStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
      }}
    >
      <Stack.Screen name="MapView" component={MapViewScreen} />
    </Stack.Navigator>
  )
}
