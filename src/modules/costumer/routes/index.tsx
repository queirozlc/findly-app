import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'tailwindcss/colors'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { CostumerBottomTabStackParamList } from './types'

const Tab = createBottomTabNavigator<CostumerBottomTabStackParamList>()

export default function CostumerTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          zIndex: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -12,
          },
          shadowOpacity: 0.15,
          shadowRadius: 10,
          justifyContent: 'center',
          alignContent: 'center',
          paddingBottom: 10,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarInactiveTintColor: colors.gray['400'],
        tabBarActiveTintColor: colors.yellow['500'],
        tabBarLabelPosition: 'below-icon',
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
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon({ color, size }) {
            return <Feather name="user" size={size} color={color} />
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  )
}
