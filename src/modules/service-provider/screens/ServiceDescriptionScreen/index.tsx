import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native'
import { useRecoilState } from 'recoil'
import colors from 'tailwindcss/colors'
import Button from '../../../../shared/components/Button'
import { RegisterServiceNavigationProps } from '../../routes/stack/register-service/types'
import { serviceDescriptionAtom } from '../../store/atoms/service-description'

export default function ServiceDescriptionScreen() {
  const [counter, setCounter] = useState(0)
  const [serviceDescription, setServiceDescription] = useRecoilState(
    serviceDescriptionAtom,
  )
  const { navigate } = useNavigation<RegisterServiceNavigationProps>()

  function handleChangeText(text: string) {
    if (text.length > 100) return

    setServiceDescription(text)
    setCounter(text.length)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white items-start"
    >
      <View className="w-full flex-1 space-y-6">
        <TextInput
          className="w-full h-3/4 text-base text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-primary-500 px-4 py-2 font-poppins-medium"
          placeholder="Descreva seu serviço"
          multiline
          numberOfLines={10}
          cursorColor={colors.yellow['500']}
          onChangeText={handleChangeText}
          value={serviceDescription || ''}
        />

        {/*
          Counter
        */}
        <View className="flex justify-end px-4">
          <Text
            className={`${
              counter >= 90 ? 'text-error-500' : 'text-gray-400'
            } text-sm`}
          >
            {counter}/100
          </Text>
        </View>

        <View className="px-4">
          <Button
            title="Continuar"
            variant="solid"
            onPress={() => {
              navigate('RegisterServiceScreen')
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
