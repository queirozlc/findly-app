import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ServiceProviderData } from '../../modules/costumer/utils/view-model/abstract-service-provider-presenter'

export type AppStackParamList = {
  CostumerTabNavigator: undefined
  RoleProfilePicker: undefined
  CostumerServiceProviderDetailsStack: { data: ServiceProviderData }
}

export type AppNavigationProps = NativeStackNavigationProp<AppStackParamList>
