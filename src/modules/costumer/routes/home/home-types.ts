import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type CostumerHomeStackParamList = {
  ServiceDetail: { serviceId: string }
  Categories: undefined
}

export type CostumerHomeStackNavigationProp =
  NativeStackNavigationProp<CostumerHomeStackParamList>
