import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MapViewStack from '../../modules/costumer/routes/stack/map-view'
import ServiceProviderDetailsStack from '../../modules/costumer/routes/stack/service-provider-details'
import CostumerTabNavigator from '../../modules/costumer/routes/tab'
import ServiceProviderTabNavigator from '../../modules/service-provider/routes/service-provider-tab'
import { AppStackParamList } from './app-route-type'

enum RoleName {
  COSTUMER = 'COSTUMER',
  ADMIN = 'ADMIN',
  SERVICE_PROVIDER = 'SERVICE_PROVIDER',
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export default function AppRoutes() {
  const roles = [RoleName.COSTUMER] // TODO: implement authentication

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {roles.includes(RoleName.COSTUMER) && (
        <>
          <Stack.Screen
            name="CostumerTabNavigator"
            component={CostumerTabNavigator}
          />
          <Stack.Screen
            name="CostumerServiceProviderDetailsStack"
            component={ServiceProviderDetailsStack}
          />
        </>
      )}

      {roles.includes(RoleName.SERVICE_PROVIDER) && (
        <>
          <Stack.Screen
            name="ServiceProviderTabNavigator"
            component={ServiceProviderTabNavigator}
          />
        </>
      )}
      <Stack.Screen
        options={{
          headerShown: false,
          animation: 'slide_from_bottom',
        }}
        name="MapViewStack"
        component={MapViewStack}
      />
    </Stack.Navigator>
  )
}
