import { Image, Text, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import { verificationCodeState } from '../../state/verification-code-state'
import OptInputBox from './OptInputBox'
import { useState } from 'react'
import Button from '../../../../shared/components/Button'

export default function EmailVerifyInput() {
  const { code } = useRecoilValue(verificationCodeState)
  const [internalValues, setInternalValues] = useState<string[]>([])
  const [validationError, setValidationError] = useState<string | null>(null)

  function validatePayload() {
    // check if all values are filled
    if (internalValues.includes('')) {
      // if not, set validation error
      setValidationError('Please fill all the fields')
      return
    }
    // validate if code is correct
    if (internalValues.join('') === code) {
      // if correct, remove validation error
      setValidationError(null)
      return
    } else {
      // if not, set validation error
      setValidationError('Code is incorrect')
    }
  }

  function onSubmit() {
    validatePayload()
    console.log(internalValues.join(''))
  }

  function handleChange(text: string, index: number) {
    // block user from entering more than 1 character
    if (text.length > 1) {
      return
    }
    const newValues = [...internalValues]
    newValues[index] = text.toUpperCase()
    setInternalValues(newValues)
  }

  return (
    <View className="space-y-8">
      <View className="flex-row items-center space-x-4 justify-center">
        {Array.from({ length: code.length }).map((_, index) => (
          <View key={index}>
            <OptInputBox
              name={`code[${index}]`}
              onChange={(text) => handleChange(text, index)}
              value={internalValues[index] || ''}
              hasError={!!validationError}
            />
          </View>
        ))}
      </View>

      {validationError && (
        <View className="flex-row items-center space-x-2 justify-center">
          <Image
            source={require('../../../../../assets/error_icon.png')}
            resizeMode={'contain'}
            className="w-6 h-6"
          />
          <Text className="text-error-500 text-center text-base font-inter-bold">
            {validationError}
          </Text>
        </View>
      )}

      <View>
        <Button
          title="Submit"
          variant="orderNotification"
          onPress={onSubmit}
          styles={{
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  )
}
