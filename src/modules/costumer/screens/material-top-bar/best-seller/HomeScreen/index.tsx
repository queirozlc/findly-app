import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { useEffect, useMemo, useRef } from 'react'
import { Dimensions, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import { mapState } from '../../../../../../shared/utils/state/atoms/map-state'
import { BestSellerHeader } from '../../../../components/BestSellerHeader'
import HomeServiceProviderCards from '../../../../components/HomeServiceProviderCards'
import Layout from '../../../../components/Layout'
import { ServiceProviderData } from '../../../../utils/view-model/abstract-service-provider-presenter'
import { fakeServiceProvider } from '../../../../utils/view-model/fake-service-provider'

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
  const mapStateValue = useRecoilValue(mapState)

  function renderItem({ item }: HomeScreenProps) {
    return <HomeServiceProviderCards data={item} />
  }

  useEffect(() => {
    if (mapStateValue === true) {
      bottomSheetRef.current?.snapToIndex(0)
    }
  }, [mapStateValue])

  return (
    <View className="flex-1">
      <Layout />
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        handleIndicatorStyle={{
          backgroundColor: colors.zinc[400],
        }}
        topInset={-20}
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
