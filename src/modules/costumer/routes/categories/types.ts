import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs'

export type CostumerCategoriesMaterialTopTabParamList = {
  Home: undefined
  BestRated: undefined
  MostPopular: undefined
  Newest: undefined
  Cheapest: undefined
}

export type CostumerCategoriesTopTabNavigationProp =
  MaterialTopTabNavigationProp<CostumerCategoriesMaterialTopTabParamList>
