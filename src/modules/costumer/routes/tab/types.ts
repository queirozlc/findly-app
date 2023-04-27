import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

export type CostumerBottomTabStackParamList = {
  HomeStack: undefined
  ProfileStack: undefined
}

export type CostumerBottomTabNavigationProps =
  BottomTabNavigationProp<CostumerBottomTabStackParamList>
