import { TextInput } from 'react-native'
import colors from 'tailwindcss/colors'
import { useEffect, useRef } from 'react'

type Props = {
  index: number
  onChange: (text: string) => void
  value: string
  hasError?: boolean
  nextInputIndex: number | null
}

export default function OptInputBox({
  value,
  onChange,
  hasError = false,
  index,
  nextInputIndex,
}: Props) {
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    if (index === nextInputIndex) {
      inputRef.current?.focus()
    }
  }, [nextInputIndex])

  return (
    <TextInput
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
      maxLength={1}
      ref={
        index === nextInputIndex ? inputRef : undefined // Focus on next input
      }
    />
  )
}
