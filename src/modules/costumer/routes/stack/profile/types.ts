import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type CostumerProfileStackParamList = {
  Profile: undefined
  EditProfile: undefined
  ChangePassword: undefined
  ChangeEmail: undefined
  Settings: undefined
}

export type CostumerProfileNavigationProps =
  NativeStackNavigationProp<CostumerProfileStackParamList>
