import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RegisterServiceHeader() {
  return (
    <SafeAreaView className="justify-center items-center flex-row bg-primary-500">
      <Text className="text-2xl font-inter-black text-zinc-800">
        Novo Serviço
      </Text>
    </SafeAreaView>
  )
}
