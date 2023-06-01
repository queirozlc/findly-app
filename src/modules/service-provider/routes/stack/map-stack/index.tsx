import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MapStackHeader from '../../../components/MapStackHeader'
import MapScreen from '../../../screens/MapScreen'
import { MapStackParamList } from './types'

const Stack = createNativeStackNavigator<MapStackParamList>()

export default function MapStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header() {
          return <MapStackHeader title="Map" />
        },
      }}
    >
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  )
}
