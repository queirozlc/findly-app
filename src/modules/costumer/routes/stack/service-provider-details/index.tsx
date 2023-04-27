import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import ServiceProviderDetailsScreen from '../../../screens/SerivceProviderStack/DetailsScreen'
import { ServiceProviderDetailsStackParamList } from './type'

const Stack = createNativeStackNavigator<ServiceProviderDetailsStackParamList>()

type Props = NativeStackScreenProps<
  ServiceProviderDetailsStackParamList,
  'Details'
>

export default function ServiceProviderDetailsStack({ route }: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
      }}
    >
      <Stack.Screen
        name="Details"
        component={ServiceProviderDetailsScreen}
        initialParams={{ data: route.params.data }}
      />
    </Stack.Navigator>
  )
}
