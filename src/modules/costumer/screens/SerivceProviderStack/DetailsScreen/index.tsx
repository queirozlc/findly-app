import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useSetRecoilState } from 'recoil'
import { serviceProviderDetailState } from '../../../../../shared/utils/state/atoms/service-provider-detail'
import ServiceProviderDetailsBanner from '../../../components/ServiceProviderDetailsBanner'
import ServiceProviderInfos from '../../../components/ServiceProviderInfos'
import Services from '../../../components/Services'
import { ServiceProviderDetailsStackParamList } from '../../../routes/stack/service-provider-details/type'
import { ServicesData } from '../../../utils/view-model/abstract-service-presenter'
import { fakeServiceData } from '../../../utils/view-model/fake-service'
import { Footer } from '../../material-top-bar/best-seller/HomeScreen'

type Props = NativeStackScreenProps<
  ServiceProviderDetailsStackParamList,
  'Details'
>

export default function ServiceProviderDetailsScreen({ route }: Props) {
  const { data } = route.params
  const setServiceProviderDetails = useSetRecoilState(
    serviceProviderDetailState,
  )

  function handleRenderServiceItems({ item }: { item: ServicesData }) {
    return <Services data={item} />
  }

  useEffect(() => {
    setServiceProviderDetails(() => ({
      averageRating: data.averageRating,
      description: data.description,
      id: data.id,
      name: data.name,
      phoneNumber: data.phoneNumber,
      thumbnail: data.thumbnail,
    }))
  }, [data])

  return (
    <View className="flex-1 bg-white">
      <ServiceProviderDetailsBanner />

      {/* Service Provider Infos */}

      {/* Service Provider Services */}
      <View className="flex-1">
        <FlatList
          ListHeaderComponent={<ServiceProviderInfos />}
          ListFooterComponent={Footer}
          data={fakeServiceData.filter(
            (item) => item.serviceProviderId === data.id,
          )}
          renderItem={handleRenderServiceItems}
          keyExtractor={(item) => item.id}
          className="pt-5"
        />
      </View>
    </View>
  )
}
