import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import colors from 'tailwindcss/colors'
import HomeScreen from '../../../screens/material-top-bar/HomeScreen'
import MostPopularScreen from '../../../screens/material-top-bar/MostPopularScreen'
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
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen
        options={{
          tabBarLabel: 'Most Popular',
        }}
        name="MostPopular"
        component={MostPopularScreen}
      />
    </TopTab.Navigator>
  )
}
