import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ServiceProviderDetailsStackParamList } from '../../modules/costumer/routes/stack/service-provider-details/type'
import { ServiceProviderData } from '../../modules/costumer/utils/view-model/abstract-service-provider-presenter'

export type AppStackParamList = {
  CostumerTabNavigator: undefined
  RoleProfilePicker: undefined
  CostumerServiceProviderDetailsStack: {
    screen: keyof ServiceProviderDetailsStackParamList
    params: { data: ServiceProviderData }
  }
}

export type AppNavigationProps = NativeStackNavigationProp<AppStackParamList>
