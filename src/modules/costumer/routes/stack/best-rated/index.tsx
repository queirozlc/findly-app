import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../../screens/material-top-bar/best-rated/HomeScreen'
import MapScreen from '../../../screens/stack/modal/MapScreen'
import { CostumerBestSellersStackParamList } from './types'

const Stack = createNativeStackNavigator<CostumerBestSellersStackParamList>()

export default function CostumerBestRatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarStyle: 'dark',
        headerShown: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          animationDuration: 100,
        }}
      >
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
