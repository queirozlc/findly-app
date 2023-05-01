import BottomSheet from '@gorhom/bottom-sheet'
import { useMemo, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { serviceDetailsState } from '../../../../shared/utils/state/atoms/service-state'
import OrderDetailsTaxesInformation from '../OrderDetailsTaxesInformation'

export default function OrderTaxInformationBottomSheet() {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['1%', '30%', '40%'], [])
  const order = useRecoilValue(serviceDetailsState) // TODO: Mocked data, need change

  return (
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
  )
}
