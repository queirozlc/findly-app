import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'tailwindcss/colors'
import ServiceProviderHomeHeader from '../../components/ServiceProviderHomeHeader'
import ServiceProviderTopTab from '../service-provider-top-tab'
import { ServiceProviderTabStackParamList } from './types'

const Tab = createBottomTabNavigator<ServiceProviderTabStackParamList>()

export default function ServiceProviderTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <ServiceProviderHomeHeader />,
        tabBarStyle: {
          height: 60,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -12,
          },
          shadowOpacity: 0.15,
          shadowRadius: 10,
          paddingBottom: 10,
        },
        tabBarInactiveTintColor: colors.zinc['400'],
        tabBarActiveTintColor: colors.yellow['500'],
        tabBarLabelStyle: {
          fontFamily: 'Inter_600SemiBold',
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon({ color, size }) {
            return <Feather name="home" size={size} color={color} />
          },
        }}
        name="ServiceProviderTopTab"
        component={ServiceProviderTopTab}
      />
    </Tab.Navigator>
  )
}
