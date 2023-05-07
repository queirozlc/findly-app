import {
  TextInputMask,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text'
import { useState } from 'react'
import colors from 'tailwindcss/colors'
import { InputProps } from '../Input'
import { Image, Text, TouchableOpacity, View } from 'react-native'

type InputMaskedProps = InputProps & {
  type: TextInputMaskTypeProp
  options?: TextInputMaskOptionProp
}

export default function InputMasked({
  type,
  error,
  hasError = false,
  value,
  keyboardType,
  onChange,
  label,
  capitalize,
  placeholder,
  secureTextEntry,
  onTouchablePress,
  icon,
  onFocus,
  options,
}: InputMaskedProps) {
  const [onFocusState, setOnFocus] = useState(false)
  return (
    <View className="space-y-2">
      <View
        className="space-y-2 justify-center"
        style={{ position: 'relative' }}
      >
        <Text className="text-base font-inter-medium text-left">{label}</Text>
        <TextInputMask
          type={type}
          options={options}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          className={`border px-4 py-2 rounded-lg h-14 font-inter-regular text-base ${
            hasError ? 'border-error-500' : 'border-dark-gray-500'
          } ${onFocusState && !error && 'border-primary-500'}`}
          keyboardType={keyboardType}
          onChangeText={onChange}
          autoCapitalize={capitalize}
          cursorColor={colors.zinc['800']}
          selectionColor={colors.zinc['800']}
          value={value}
          onFocus={() => {
            setOnFocus(true)
            if (onFocus) onFocus()
          }}
        />
        <TouchableOpacity
          className="absolute right-5 top-10"
          activeOpacity={1}
          onPress={onTouchablePress}
        >
          {icon}
        </TouchableOpacity>
      </View>

      {error && (
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require('../../../../assets/error_icon.png')}
            resizeMode={'contain'}
            className="w-5 h-5"
          />
          <Text className="text-sm text-red-500 font-poppins-semi text-center">
            {error.message}
          </Text>
        </View>
      )}
    </View>
  )
}
