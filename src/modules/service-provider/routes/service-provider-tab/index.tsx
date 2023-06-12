import { AntDesign, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'tailwindcss/colors'
import ServiceProviderHomeHeader from '../../components/ServiceProviderHomeHeader'
import ServiceProviderTopTab from '../service-provider-top-tab'
import { ServiceProviderTabStackParamList } from './types'
import RegisterServiceStack from '../stack/register-service'

const Tab = createBottomTabNavigator<ServiceProviderTabStackParamList>()

export default function ServiceProviderTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
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
          header: () => <ServiceProviderHomeHeader />,
          tabBarLabel: 'Início',
          tabBarIcon({ color, size }) {
            return <Feather name="home" size={size} color={color} />
          },
        }}
        name="ServiceProviderTopTab"
        component={ServiceProviderTopTab}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Novo Serviço',
          tabBarIcon({ color, size }) {
            return <AntDesign name="carryout" size={size} color={color} />
          },
        }}
        name={'RegisterService'}
        component={RegisterServiceStack}
      />
    </Tab.Navigator>
  )
}
