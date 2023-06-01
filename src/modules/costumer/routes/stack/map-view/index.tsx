import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MapStackHeader from '../../../../service-provider/components/MapStackHeader'
import MapViewScreen from '../../../screens/MapViewScreen'
import { MapViewStackParamList } from './types'

const Stack = createNativeStackNavigator<MapViewStackParamList>()

export default function MapViewStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header() {
          return <MapStackHeader title="Find A Service" />
        },
      }}
    >
      <Stack.Screen name="MapView" component={MapViewScreen} />
    </Stack.Navigator>
  )
}
