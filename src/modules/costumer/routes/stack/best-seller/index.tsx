import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../../screens/material-top-bar/best-seller/HomeScreen'
import MapScreen from '../../../screens/modal/MapScreen'
import { CostumerBestSellersStackParamList } from './types'

const Stack = createNativeStackNavigator<CostumerBestSellersStackParamList>()

export default function CostumerBestSellerStack() {
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
        }}
      >
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
