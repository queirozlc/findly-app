import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'
import ServiceProviderDetailsBanner from '../../../components/ServiceProviderDetailsBanner'
import { ServiceProviderDetailsStackParamList } from '../../../routes/stack/service-provider-details/type'

type Props = NativeStackScreenProps<
  ServiceProviderDetailsStackParamList,
  'Details'
>

export default function ServiceProviderDetailsScreen({ route }: Props) {
  const { data } = route.params
  return (
    <View className="flex-1 bg-white">
      <ServiceProviderDetailsBanner data={data} />
    </View>
  )
}
