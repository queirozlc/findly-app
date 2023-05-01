import { AntDesign } from '@expo/vector-icons'
import BottomSheet from '@gorhom/bottom-sheet'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useMemo, useRef } from 'react'
import { Text, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import Button from '../../../../shared/components/Button'
import { serviceProviderDetailState } from '../../../../shared/utils/state/atoms/service-provider-detail'
import OrderDetailsScreenOtherInformation from '../../components/OrderDetailsScreenOtherInformation'
import OrderDetailsScreenServiceInformation from '../../components/OrderDetailsScreenServiceInformation'
import OrderDetailsScreenServiceProviderInfo from '../../components/OrderDetailsScreenServiceProviderInfo'
import OrderDetailsTaxesInformation from '../../components/OrderDetailsTaxesInformation'

import { ServiceProviderDetailsStackParamList } from '../../routes/stack/service-provider-details/type'

type Props = NativeStackScreenProps<
  ServiceProviderDetailsStackParamList,
  'OrderDetails'
>

export default function OrderDetailsScreen({ navigation, route }: Props) {
  const { data: order } = route.params
  const serviceProviderData = useRecoilValue(serviceProviderDetailState)
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

      <View
        className="bg-white absolute w-full justify-center bottom-0 py-10 space-y-5 px-5"
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,
          elevation: 10,
        }}
      >
        <View className="flex-row items-center justify-between">
          <Text className="text-zinc-800 text-base font-inter-semi">
            Total with taxes
          </Text>
          <View className="flex-row items-center space-x-2">
            <Text className="text-zinc-800 text-base font-inter-semi">
              {/* Fake taxes, need change */}
              R$ {order.price + 10}
            </Text>
            <AntDesign
              name="questioncircleo"
              size={20}
              color={colors.zinc[500]}
              onPress={handleBottomSheet}
            />
          </View>
        </View>
        <View>
          <Button
            title="Continue"
            // onPress={() => navigation.navigate('Payment', { data: order })}
            variant="solid"
          />
        </View>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}
        enablePanDownToClose={true}
      >
        <OrderDetailsTaxesInformation
          bottomSheetRef={bottomSheetRef}
          order={order}
        />
      </BottomSheet>
    </View>
  )
}
