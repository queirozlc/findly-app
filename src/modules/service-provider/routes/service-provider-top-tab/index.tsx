import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import colors from 'tailwindcss/colors'
import AcceptedOrdersStack from '../stack/accepted-orders'
import { ServiceProviderTopTabParamList } from './types'

const MaterialTopTab =
  createMaterialTopTabNavigator<ServiceProviderTopTabParamList>()

export default function ServiceProviderTopTab() {
  return (
    <MaterialTopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.yellow[500],
        tabBarInactiveTintColor: colors.zinc[400],
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins_600SemiBold',
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.yellow[500],
          height: 3,
        },
        tabBarPressColor: 'transparent',
        tabBarScrollEnabled: true,
      }}
    >
      <MaterialTopTab.Screen
        options={{
          tabBarLabel: 'Accepted',
        }}
        name="AcceptedOrdersStack"
        component={AcceptedOrdersStack}
      />
    </MaterialTopTab.Navigator>
  )
}
