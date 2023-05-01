import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MapScreen from '../../../screens/MapScreen'
import { MapStackParamList } from './types'

const Stack = createNativeStackNavigator<MapStackParamList>()

export default function MapStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        statusBarStyle: 'dark',
      }}
    >
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  )
}
