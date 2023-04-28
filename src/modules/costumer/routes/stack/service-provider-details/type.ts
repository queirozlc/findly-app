import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ServiceData } from '../../../utils/view-model/abstract-service-presenter'
import { ServiceProviderData } from '../../../utils/view-model/abstract-service-provider-presenter'

export type ServiceProviderDetailsStackParamList = {
  Details: { data: ServiceProviderData }
  ServiceDetails: { data: ServiceData }
}

export type ServiceProviderDetailsNavigationProps =
  NativeStackNavigationProp<ServiceProviderDetailsStackParamList>
