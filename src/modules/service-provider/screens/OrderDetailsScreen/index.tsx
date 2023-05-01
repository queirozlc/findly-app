import BottomSheet from '@gorhom/bottom-sheet'
import { useCallback, useRef } from 'react'
import { View } from 'react-native'
import { useRecoilState } from 'recoil'
import Layout from '../../components/Layout'
import OrderNotificationContent from '../../components/OrderNotificationBottomSheet/OrderNotificationContent'
import { notificationBottomSheetIndexState } from '../../store/atoms/notifications-bottom-sheet-index'

export default function OrderDetailsScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const [index, setIndex] = useRecoilState(notificationBottomSheetIndexState)

  const handleSheetChanges = useCallback((index: number) => {
    setIndex(index)
  }, [])

  return (
    <View className="flex-1 bg-white">
      <Layout />
      <BottomSheet
        ref={bottomSheetRef}
        index={index}
        snapPoints={['1%', '60%']}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
      >
        <OrderNotificationContent />
      </BottomSheet>
    </View>
  )
}
