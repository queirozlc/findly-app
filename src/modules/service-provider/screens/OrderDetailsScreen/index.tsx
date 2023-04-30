import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { useCallback, useRef } from 'react'
import { Text, View } from 'react-native'
import { useRecoilState } from 'recoil'
import { notificationBottomSheetIndexState } from '../../store/atoms/notifications-bottom-sheet-index'

export default function OrderDetailsScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const [index, setIndex] = useRecoilState(notificationBottomSheetIndexState)

  const handleSheetChanges = useCallback((index: number) => {
    setIndex(index)
  }, [])

  return (
    <View className="flex-1 bg-white">
      <BottomSheet
        ref={bottomSheetRef}
        index={index}
        snapPoints={['1%', '50%', '100%']}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
      >
        <BottomSheetView>
          <View className="h-full bg-white">
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}
