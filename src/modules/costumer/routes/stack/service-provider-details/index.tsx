import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import OrderDetailsScreenHeader from '../../../components/OrderDetailsScreenHeader'
import AddressConfirmationScreen from '../../../screens/AddressConfirmationScreen'
import OrderDetailsScreen from '../../../screens/OrderDetailsScreen'
import ServiceProviderDetailsScreen from '../../../screens/SerivceProviderStack/DetailsScreen'
import ServiceDetailsScreen from '../../../screens/ServiceDetailsScreen'
import { ServiceProviderDetailsStackParamList } from './type'

const Stack = createNativeStackNavigator<ServiceProviderDetailsStackParamList>()

type Props = NativeStackScreenProps<
  ServiceProviderDetailsStackParamList,
  'Details'
>

export default function ServiceProviderDetailsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
      }}
    >
      <Stack.Screen name="Details" component={ServiceProviderDetailsScreen} />
      <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          header() {
            return <OrderDetailsScreenHeader title="Order Details" />
          },
          statusBarStyle: 'dark',
        }}
        name="OrderDetails"
        component={OrderDetailsScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header() {
            return <OrderDetailsScreenHeader title="Confirm your Address" />
          },
          statusBarStyle: 'dark',
        }}
        name="AddressConfirmation"
        component={AddressConfirmationScreen}
      />
    </Stack.Navigator>
  )
}
