import { AntDesign, Feather } from '@expo/vector-icons'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { useState } from 'react'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { ServiceData } from '../../utils/models/abstract-service-presenter'

interface Props {
  order: ServiceData
  bottomSheetRef: React.RefObject<BottomSheet>
}

export default function OrderDetailsTaxesInformation({
  order,
  bottomSheetRef,
}: Props) {
  const [showTaxeInfo, setShowTaxeInfo] = useState(false)

  function handleTaxeInfo() {
    setShowTaxeInfo(!showTaxeInfo)
    if (showTaxeInfo) {
      bottomSheetRef.current?.snapToIndex(1)
    } else {
      bottomSheetRef.current?.snapToIndex(2)
    }
  }

  return (
    <BottomSheetView>
      <View className="px-4 py-4 space-y-5">
        <View className="flex-row items-center space-x-2 justify-between">
          <Text className="text-base capitalize tracking-tight font-inter-semi text-zinc-800">
            All taxes included
          </Text>
          <Feather name="info" size={20} color={colors.zinc[500]} />
        </View>

        <View className="flex-row items-center space-x-2 justify-between">
          <Text className="text-base capitalize font-inter-medium text-zinc-800">
            Subtotal
          </Text>

          <Text className="text-sm capitalize font-inter-medium text-zinc-800">
            R$ {order.price}
          </Text>
        </View>
        <View className="flex-row items-center space-x-2 justify-between">
          <View className="flex-row items-center space-x-2">
            <Text className="text-base capitalize font-inter-medium text-zinc-500">
              Service fee
            </Text>
            <AntDesign
              name="questioncircle"
              size={14}
              color={colors.zinc[500]}
              onPress={handleTaxeInfo}
            />
          </View>
          <Text className="text-sm capitalize font-inter-medium text-zinc-800">
            {/* Fake fee */}
            R$ 10
          </Text>
        </View>

        {showTaxeInfo && (
          <View className="bg-lightest-gray-500 p-3 rounded-sm">
            <Text className="text-xs text-left font-inter-regular text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur
            </Text>
          </View>
        )}

        <View className="flex-row items-center space-x-2 justify-between">
          <Text className="text-base capitalize font-inter-semi text-zinc-800">
            Total
          </Text>

          <Text className="text-sm capitalize font-inter-semi text-zinc-800">
            {/* Fake total */}
            R$ {order.price + 10}
          </Text>
        </View>
      </View>
    </BottomSheetView>
  )
}
