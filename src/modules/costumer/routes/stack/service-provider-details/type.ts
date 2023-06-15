import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ServiceData } from '../../../utils/models/abstract-service-presenter'
import { ServiceProviderData } from '../../../utils/models/abstract-service-provider-presenter'

export type ServiceProviderDetailsStackParamList = {
  Details: { data: ServiceProviderData }
  ServiceDetails: { data: ServiceData }
  OrderDetails: { data: ServiceData }
  AddressConfirmation: undefined
}

export type ServiceProviderDetailsNavigationProps =
  NativeStackNavigationProp<ServiceProviderDetailsStackParamList>
