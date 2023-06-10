import { AntDesign, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'tailwindcss/colors'
import ServiceProviderHomeHeader from '../../components/ServiceProviderHomeHeader'
import ServiceProviderTopTab from '../service-provider-top-tab'
import { ServiceProviderTabStackParamList } from './types'
import RegisterServiceScreen from '../../screens/RegisterServiceScreen'

const Tab = createBottomTabNavigator<ServiceProviderTabStackParamList>()

export default function ServiceProviderTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <ServiceProviderHomeHeader />,
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

      <Tab.Screen
        options={{
          tabBarLabel: 'Register Service',
          tabBarIcon({ color, size }) {
            return <AntDesign name="carryout" size={size} color={color} />
          },
        }}
        name={'RegisterService'}
        component={RegisterServiceScreen}
      />
    </Tab.Navigator>
  )
}
