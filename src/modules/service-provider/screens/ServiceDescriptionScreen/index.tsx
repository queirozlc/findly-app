import { useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native'
import colors from 'tailwindcss/colors'
import Button from '../../../../shared/components/Button'

export default function ServiceDescriptionScreen() {
  const [counter, setCounter] = useState(0)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white items-start"
    >
      <View className="w-full flex-1 space-y-6">
        <TextInput
          className="w-full h-3/4 text-base text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-primary-500 px-4 py-2 font-poppins-medium "
          placeholder="Descreva seu serviço"
          multiline
          numberOfLines={10}
          cursorColor={colors.yellow['500']}
          onChangeText={(text) => setCounter(text.length)}
        />

        {/*
          Counter
        */}
        <View className="flex justify-end px-4">
          <Text className="text-gray-400 text-sm">{counter}/500</Text>
        </View>

        <View className="px-4">
          <Button title="Continuar" variant="solid" />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
