import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderDetailsScreen from '../../../screens/OrderDetailsScreen'
import { AcceptedOrdersStackParamList } from './types'

const Stack = createNativeStackNavigator<AcceptedOrdersStackParamList>()

export default function AcceptedOrdersStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
    </Stack.Navigator>
  )
}
