import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ServiceProviderDetailsStack from '../../modules/costumer/routes/stack/service-provider-details'
import CostumerTabNavigator from '../../modules/costumer/routes/tab'
import { AppStackParamList } from './app-route-type'

enum RoleName {
  COSTUMER = 'COSTUMER',
  ADMIN = 'ADMIN',
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export default function AppRoutes() {
  const roles = [RoleName.COSTUMER, RoleName.ADMIN] // TODO: implement authentication

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="CostumerTabNavigator"
        component={CostumerTabNavigator}
      />
      <Stack.Screen
        name="CostumerServiceProviderDetailsStack"
        component={ServiceProviderDetailsStack}
      />
    </Stack.Navigator>
  )
}
