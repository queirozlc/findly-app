import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type CostumerBestSellersStackParamList = {
  Home: undefined
  ServiceDetails: { serviceId: string }
  Map: undefined
}

export type CostumerBestSellersNavigationProps =
  NativeStackNavigationProp<CostumerBestSellersStackParamList>
