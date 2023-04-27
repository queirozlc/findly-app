import { AntDesign } from '@expo/vector-icons'
import { Text, View } from 'react-native'

export const BestSellerHeader = () => {
  return (
    <View className="flex-row items-center justify-between px-3">
      <Text className="text-xl font-poppins-semi text-zinc-700 uppercase tracking-wider">
        Best Sellers
      </Text>
      <View className="p-2 rounded-full border border-lightest-gray-500">
        <AntDesign name="barchart" size={24} color="black" />
      </View>
    </View>
  )
}
