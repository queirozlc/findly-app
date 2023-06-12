import { Text, TouchableOpacity, View } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Input from '../../../../shared/components/Input'
import colors from 'tailwindcss/colors'

function RegisterServiceImagePicker() {
  return (
    <View className={'items-center py-10 space-y-4'}>
      <TouchableOpacity
        className={
          'w-24 h-24 bg-lightest-gray-500 rounded-full flex items-center justify-center'
        }
      >
        {/*
            Camera icon
          */}
        <MaterialCommunityIcons
          name="camera-plus-outline"
          size={44}
          color="black"
        />
      </TouchableOpacity>

      <Text className={'text-xl font-inter-medium text-zinc-800'}>
        Imagem do serviço
      </Text>
    </View>
  )
}

function ServiceDescription() {
  return (
    <View className="mt-4 px-2 space-y-6">
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
        className="font-inter-medium text-sm text-zinc-500 border border-zinc-300 rounded-md  px-3 py-3 h-32"
        activeOpacity={0.7}
      >
        <Text className="text-zinc-500 text-sm font-inter-medium">
          Exemplo: Serviço de corte de cabelo
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default function RegisterServiceScreen() {
  return (
    <View className={'flex-1 bg-white space-y-10'}>
      <View>
        <RegisterServiceImagePicker />
      </View>

      <View className={'px-4'}>
        <View className={'space-y-4'}>
          <Input label={'Título do serviço'} required />

          <View>
            <ServiceDescription />
          </View>
        </View>
      </View>
    </View>
  )
}
