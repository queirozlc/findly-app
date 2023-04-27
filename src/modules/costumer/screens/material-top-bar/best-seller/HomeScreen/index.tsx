import { FlatList, Text, View } from 'react-native'
import { BestSellerHeader } from '../../../../components/BestSellerHeader'
import HomeServiceProviderCards from '../../../../components/HomeServiceProviderCards'
import Layout from '../../../../components/Layout'
import { ServiceProviderData } from '../../../../utils/view-model/abstract-service-provider-presenter'
import { fakeServiceProvider } from '../../../../utils/view-model/fake-service-provider'

interface HomeScreenProps {
  item: ServiceProviderData
}

function Footer() {
  return (
    <View className="mt-12 items-center justify-center">
      <Text className="text-zinc-600 text-4xl">•</Text>
    </View>
  )
}

export default function HomeScreen() {
  function renderItem({ item }: HomeScreenProps) {
    return <HomeServiceProviderCards data={item} />
  }

  return (
    <View className="flex-1 bg-white">
      <Layout />
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={BestSellerHeader}
        ListFooterComponent={Footer}
        data={fakeServiceProvider}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        className="px-5 pt-10"
      />
    </View>
  )
}
