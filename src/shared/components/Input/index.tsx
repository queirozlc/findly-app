import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

interface InputProps {
  placeholder?: string
  secureTextEntry?: boolean
  icon?: React.ReactNode
  onChange?: (value: string) => void
  keyboardType?: KeyboardTypeOptions
  label: string
  capitalize?: 'none' | 'sentences' | 'words' | 'characters'
  onTouchablePress?: () => void
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
}: InputProps) {
  return (
    <View className="space-y-2 justify-center" style={{ position: 'relative' }}>
      <Text className="text-base font-inter-medium text-left">{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        className="border border-dark-gray-500 px-4 py-2 rounded-lg h-14 font-inter-regular text-base"
        keyboardType={keyboardType}
        onChangeText={onChange}
        autoCapitalize={capitalize}
      />
      <TouchableOpacity
        className="absolute right-5 top-10"
        activeOpacity={1}
        onPress={onTouchablePress}
      >
        {icon}
      </TouchableOpacity>
    </View>
  )
}
