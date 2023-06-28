import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import colors from 'tailwindcss/colors'
import { RegisterServiceNavigationProps } from '../../routes/stack/register-service/types'
import { serviceDescriptionAtom } from '../../store/atoms/service-description'

export default function ServiceDescription() {
  const navigation = useNavigation<RegisterServiceNavigationProps>()
  const serviceDescription = useRecoilValue(serviceDescriptionAtom)

  return (
    <View className="mt-4 px-2 space-y-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center space-x-2">
          <Feather name="message-square" size={20} color={colors.zinc[500]} />
          <Text className="text-zinc-500 text-sm font-inter-semi">
            Descrição do serviço
          </Text>
        </View>

        <Text className="text-zinc-500 text-sm font-poppins-medium">0/100</Text>
      </View>

      <TouchableOpacity
        className="font-inter-medium text-sm text-zinc-500 border border-zinc-300 rounded-md  px-3 py-3 h-28"
        onPress={() => navigation.navigate('ServiceDescription')}
      >
        <Text className="text-zinc-500 text-sm font-inter-medium">
          {serviceDescription || 'Exemplo: Serviço de corte de cabelo'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
