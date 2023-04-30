import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { useMemo, useRef } from 'react'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import MapViewSearchInput from './MapViewSearchInput'
import MapViewServiceProviderCard from './MapViewServiceProviderCard'

export default function BottomSheetMapView() {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], [])

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      handleIndicatorStyle={{
        backgroundColor: colors.zinc[400],
      }}
    >
      <BottomSheetView>
        <View className="w-full h-full p-4 space-y-6">
          <Text className="font-poppins-bold text-center uppercase tracking-wide text-xl text-zinc-700">
            Service Providers Around You
          </Text>

          <View className="mb-10">
            <MapViewSearchInput />
          </View>

          <MapViewServiceProviderCard />
        </View>
      </BottomSheetView>
    </BottomSheet>
  )
}
