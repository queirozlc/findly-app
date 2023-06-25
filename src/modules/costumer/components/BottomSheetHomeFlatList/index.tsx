import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Dimensions } from 'react-native'
import { useRecoilState } from 'recoil'
import colors from 'tailwindcss/colors'
import { mapState } from '../../../../shared/utils/state/atoms/map-state'
import { ServiceProviderData } from '../../utils/models/abstract-service-provider-presenter'
import { fakeServiceProvider } from '../../utils/models/fake-service-provider'
import HomeServiceProviderCards from '../HomeServiceProviderCards'
import { Footer } from '../HomeServiceProviderCards/Footer'

export default function BottomSheetHomeFlatList() {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const deviceHeight = Dimensions.get('window').height
  const snapPoints = useMemo(() => [deviceHeight * 0.1, deviceHeight], [])
  const [mapStateValue, setMapState] = useRecoilState(mapState)
  const [index, setIndex] = useState(1)

  function renderItem({ item }: { item: ServiceProviderData }) {
    return <HomeServiceProviderCards data={item} />
  }

  const handleSheetChange = useCallback((index: number) => {
    if (index === 0) {
      setMapState(true)
      setIndex(index)
    } else {
      setMapState(false)
      setIndex(index)
    }
  }, [])

  useEffect(() => {
    if (mapStateValue) {
      setIndex(0)
      bottomSheetRef.current?.snapToIndex(0)
    }
  }, [index, mapStateValue])

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={index}
      snapPoints={snapPoints}
      handleIndicatorStyle={{
        backgroundColor: colors.zinc[400],
      }}
      topInset={-20}
      onChange={handleSheetChange}
    >
      <BottomSheetFlatList
        showsVerticalScrollIndicator={false}
        ListFooterComponent={Footer}
        data={fakeServiceProvider}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      />
    </BottomSheet>
  )
}
