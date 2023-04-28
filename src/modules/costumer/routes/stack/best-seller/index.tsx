import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MapScreen from '../../../screens/MapScreen'
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
        <Stack.Screen name="Home" component={MapScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
