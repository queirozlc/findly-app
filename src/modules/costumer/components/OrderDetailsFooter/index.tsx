import { AntDesign } from '@expo/vector-icons'
import BottomSheet from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native'
import { useMemo, useRef } from 'react'
import { Text, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import Button from '../../../../shared/components/Button'
import { serviceDetailsState } from '../../../../shared/utils/state/atoms/service-state'
import { ServiceProviderDetailsNavigationProps } from '../../routes/stack/service-provider-details/type'
import OrderDetailsTaxesInformation from '../OrderDetailsTaxesInformation'

export default function OrderDetailsFooter() {
  const navigation = useNavigation<ServiceProviderDetailsNavigationProps>()
  const order = useRecoilValue(serviceDetailsState) // TODO: Mocked data, need change
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['1%', '30%', '40%'], [])

  function handleBottomSheet() {
    bottomSheetRef.current?.snapToIndex(1)
  }

  return (
    <>
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
            onPress={() => navigation.navigate('AddressConfirmation')}
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
    </>
  )
}
