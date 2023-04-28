import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { View } from 'react-native'
import { useSetRecoilState } from 'recoil'
import { serviceDetailsState } from '../../../../shared/utils/state/atoms/service-state'
import ServiceBanner from '../../components/ServiceBanner'
import ServiceInfo from '../../components/ServiceInfo'
import { ServiceProviderDetailsStackParamList } from '../../routes/stack/service-provider-details/type'

type Props = NativeStackScreenProps<
  ServiceProviderDetailsStackParamList,
  'ServiceDetails'
>

export default function ServiceDetailsScreen({ route }: Props) {
  const { data } = route.params
  const setServiceData = useSetRecoilState(serviceDetailsState)

  useEffect(() => {
    setServiceData(() => data)
  })

  return (
    <View className="flex-1 bg-white">
      <ServiceBanner />

      <ServiceInfo />
    </View>
  )
}
