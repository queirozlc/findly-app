import { TextInput } from 'react-native'
import colors from 'tailwindcss/colors'
import { Ref } from 'react'

type Props = {
  name: string
  ref?: Ref<TextInput>
  index?: number
  onChange: (text: string) => void
  value: string
  hasError?: boolean
}

export default function OptInputBox({
  ref,
  index,
  value,
  onChange,
  hasError = false,
}: Props) {
  return (
    <TextInput
      ref={ref}
      onChangeText={
        (text) => onChange(text.toUpperCase()) // Convert to uppercase
      }
      value={value}
      className={`border-2 border-dark-gray-500 w-12 h-12 text-center text-2xl font-poppins-bold rounded-lg ${
        hasError ? 'border-error-500' : 'border-dark-gray-500'
      }
      `}
      cursorColor={colors.zinc[500]}
      autoCapitalize={'characters'}
    />
  )
}
