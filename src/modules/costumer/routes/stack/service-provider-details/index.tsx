import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
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
    </Stack.Navigator>
  )
}
