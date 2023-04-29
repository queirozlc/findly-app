import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { useRecoilState } from 'recoil'
import colors from 'tailwindcss/colors'
import { mapState } from '../../../../shared/utils/state/atoms/map-state'
import { BestSellerHeader } from '../../components/BestSellerHeader'
import HomeServiceProviderCards from '../../components/HomeServiceProviderCards'
import Layout from '../../components/Layout'
import { ServiceProviderData } from '../../utils/view-model/abstract-service-provider-presenter'
import { fakeServiceProvider } from '../../utils/view-model/fake-service-provider'

interface HomeScreenProps {
  item: ServiceProviderData
}

export function Footer() {
  return <View className="mt-12 items-center justify-center" />
}

export default function HomeScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const deviceHeight = Dimensions.get('window').height
  const snapPoints = useMemo(() => [deviceHeight * 0.1, deviceHeight], [])
  const [mapStateValue, setMapState] = useRecoilState(mapState)
  const [index, setIndex] = useState(1)

  function renderItem({ item }: HomeScreenProps) {
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
    if (mapStateValue === true) {
      setIndex(0)
      bottomSheetRef.current?.snapToIndex(0)
    }
  }, [index, mapStateValue])

  return (
    <View className="flex-1 absolute top-0 right-0 left-0 bottom-0">
      <Layout />
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
          ListHeaderComponent={BestSellerHeader}
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
    </View>
  )
}
