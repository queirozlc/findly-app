import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ServiceProviderData } from '../../../utils/view-model/abstract-service-provider-presenter'

export type ServiceProviderDetailsStackParamList = {
  Details: { data: ServiceProviderData }
}

export type ServiceProviderDetailsNavigationProps =
  NativeStackNavigationProp<ServiceProviderDetailsStackParamList>
