import { Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import Button from '../../../../shared/components/Button'
import { serviceDetailsState } from '../../../../shared/utils/state/atoms/service-state'

export default function ServiceNote() {
  const data = useRecoilValue(serviceDetailsState)

  return (
    <View className="mt-4 px-2 space-y-6">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center space-x-2">
          <Feather name="message-square" size={20} color={colors.zinc[500]} />
          <Text className="text-zinc-500 text-sm font-inter-semi">
            Do you have any notes to leave?
          </Text>
        </View>

        <Text className="text-zinc-500 text-sm font-poppins-medium">0/100</Text>
      </View>

      <TouchableOpacity
        className="font-inter-medium text-sm text-zinc-500 border border-zinc-300 rounded-md  px-3 py-3 h-20"
        activeOpacity={0.7}
      >
        <Text className="text-zinc-500 text-sm font-inter-medium">
          Type here...
        </Text>
      </TouchableOpacity>

      <View className="pt-5">
        <Button
          title="Request Service"
          variant="solid"
          textStyles={{
            textTransform: 'uppercase',
          }}
        />
      </View>
    </View>
  )
}
