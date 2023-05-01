import BottomSheet from '@gorhom/bottom-sheet'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useMemo, useRef } from 'react'
import { View } from 'react-native'
import OrderDetailsFooter from '../../components/OrderDetailsFooter'
import OrderDetailsScreenOtherInformation from '../../components/OrderDetailsScreenOtherInformation'
import OrderDetailsScreenServiceInformation from '../../components/OrderDetailsScreenServiceInformation'
import OrderDetailsScreenServiceProviderInfo from '../../components/OrderDetailsScreenServiceProviderInfo'

import { ServiceProviderDetailsStackParamList } from '../../routes/stack/service-provider-details/type'

type Props = NativeStackScreenProps<
  ServiceProviderDetailsStackParamList,
  'OrderDetails'
>

export default function OrderDetailsScreen({ navigation, route }: Props) {
  const { data: order } = route.params
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['1%', '30%', '40%'], [])

  function handleBottomSheet() {
    bottomSheetRef.current?.snapToIndex(1)
  }

  return (
    <View className="flex-1 bg-white py-5 relative">
      <View className="space-y-5 px-4">
        <View>
          <OrderDetailsScreenServiceProviderInfo />
        </View>

        {/* Service Information */}
        <View>
          <OrderDetailsScreenServiceInformation order={order} />
        </View>

        {/* Other Information */}
        <View>
          <OrderDetailsScreenOtherInformation />
        </View>
      </View>

      {/* Footer */}
      <OrderDetailsFooter />
    </View>
  )
}
