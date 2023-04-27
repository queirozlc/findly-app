import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

export type CostumerBottomTabStackParamList = {
  Home: undefined
  Profile: undefined
  Orders: undefined
}

export type CostumerBottomTabNavigationProps =
  BottomTabNavigationProp<CostumerBottomTabStackParamList>
