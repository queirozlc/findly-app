import { AntDesign, Feather } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import colors from 'tailwindcss/colors'
import MostPopularScreen from '../../../screens/material-top-bar/MostPopularScreen'
import CostumerBestRatedStack from '../../stack/best-rated'
import { CostumerCategoriesMaterialTopTabParamList } from './types'

const TopTab =
  createMaterialTopTabNavigator<CostumerCategoriesMaterialTopTabParamList>()

export default function CostumerMaterialTabCategories() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.yellow[500],
        tabBarInactiveTintColor: colors.zinc[400],
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'Poppins_600SemiBold',
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.yellow[500],
          height: 3,
        },
      }}
    >
      <TopTab.Screen
        options={{
          tabBarLabel: 'Best Sellers',
          tabBarIcon({ color }) {
            return <Feather name="award" size={24} color={color} />
          },
        }}
        name="BestSellers"
        component={CostumerBestRatedStack}
      />
      <TopTab.Screen
        options={{
          tabBarLabel: 'Most Popular',
          tabBarIcon({ color }) {
            return <AntDesign name="rocket1" size={24} color={color} />
          },
        }}
        name="MostPopular"
        component={MostPopularScreen}
      />
    </TopTab.Navigator>
  )
}
