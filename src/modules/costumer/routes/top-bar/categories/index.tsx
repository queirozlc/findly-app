import { AntDesign, Feather } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import colors from 'tailwindcss/colors'
import MostPopularScreen from '../../../screens/MostPopularScreen'
import CostumerBestSellerStack from '../../stack/best-seller'
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
      <TopTab.Screen
        options={{
          tabBarLabel: 'Best Sellers',
          tabBarIcon({ color }) {
            return <Feather name="award" size={24} color={color} />
          },
        }}
        name="BestSellers"
        component={CostumerBestSellerStack}
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
      <TopTab.Screen
        options={{
          tabBarLabel: 'Cheapest',
          tabBarIcon({ color }) {
            return <AntDesign name="rocket1" size={24} color={color} />
          },
        }}
        name="Cheapest"
        component={MostPopularScreen}
      />
      <TopTab.Screen
        options={{
          tabBarLabel: 'Newest',
          tabBarIcon({ color }) {
            return <AntDesign name="rocket1" size={24} color={color} />
          },
        }}
        name="Newest"
        component={MostPopularScreen}
      />
    </TopTab.Navigator>
  )
}
