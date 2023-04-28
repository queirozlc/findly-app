import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { AppNavigationProps } from '../../../../shared/routes/app-route-type'
import { ServiceProviderData } from '../../utils/view-model/abstract-service-provider-presenter'
import HomeCardInfos from '../HomeCardInfos'
import HomeCardThumbnail from '../HomeCardThumbnail'

interface HomeServiceProviderCardsProps {
  data: ServiceProviderData
}

export default function HomeServiceProviderCards({
  data,
}: HomeServiceProviderCardsProps) {
  const navigation = useNavigation<AppNavigationProps>()

  return (
    <>
      <TouchableOpacity
        className="bg-white rounded-t-3xl rounded-b-lg flex-1 mt-10 pb-3"
        activeOpacity={0.9}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.14,
          elevation: 2,
        }}
        onPress={() =>
          navigation.navigate('CostumerServiceProviderDetailsStack', {
            screen: 'Details',
            params: { data },
          })
        }
      >
        <HomeCardThumbnail data={data} />

        {/* Service Provider Infos */}
        <HomeCardInfos data={data} />
      </TouchableOpacity>
    </>
  )
}
