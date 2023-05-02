import BottomSheet from '@gorhom/bottom-sheet'
import { useMemo, useRef } from 'react'
import colors from 'tailwindcss/colors'
import OrderNotificationContent from './OrderNotificationContent'

interface Props {
  initialSnapIndex?: number
}

export default function OrderNotificationBottomSheet({
  initialSnapIndex = 0,
}: Props) {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['10%', '25%', '50%'], [])

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={initialSnapIndex}
      snapPoints={snapPoints}
      handleIndicatorStyle={{
        backgroundColor: colors.zinc[300],
      }}
    >
      <OrderNotificationContent />
    </BottomSheet>
  )
}
