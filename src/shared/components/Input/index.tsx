import {
  Image,
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import colors from 'tailwindcss/colors'
import { FieldError } from 'react-hook-form'

export type InputProps = {
  placeholder?: string
  secureTextEntry?: boolean
  icon?: React.ReactNode
  onChange?: (value: string) => void
  keyboardType?: KeyboardTypeOptions
  label: string
  capitalize?: 'none' | 'sentences' | 'words' | 'characters'
  onTouchablePress?: () => void
  value?: string
  hasError?: boolean
  error?: FieldError
}

export default function Input({
  placeholder,
  secureTextEntry,
  icon,
  keyboardType,
  onChange,
  label,
  capitalize,
  onTouchablePress,
  value,
  hasError = false,
  error,
}: InputProps) {
  return (
    <View className="space-y-2">
      <View
        className="space-y-2 justify-center"
        style={{ position: 'relative' }}
      >
        <Text className="text-base font-inter-medium text-left">{label}</Text>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          className={`border px-4 py-2 rounded-lg h-14 font-inter-regular text-base ${
            hasError ? 'border-error-500' : 'border-dark-gray-500'
          }`}
          keyboardType={keyboardType}
          onChangeText={onChange}
          autoCapitalize={capitalize}
          cursorColor={colors.zinc['800']}
          selectionColor={colors.zinc['800']}
          value={value}
        />
        <TouchableOpacity
          className="absolute right-5 top-10"
          activeOpacity={1}
          onPress={onTouchablePress}
        >
          {icon}
        </TouchableOpacity>
      </View>

      {hasError && error && (
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
