import { AxiosError } from 'axios'
import { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { useMutation } from 'react-query'
import { useRecoilValue } from 'recoil'
import Button from '../../../../shared/components/Button'
import { BaseHttpError } from '../../../../shared/errors/BaseHttpError'
import { VerificationCodeRequest } from '../../infra/dtos/verification-code-request'
import { createUserState } from '../../state/create-user-state'
import { verificationCodeState } from '../../state/verification-code-state'
import OptInputBox from './OptInputBox'
import { VerifyEmail } from '../../infra/service/VerifyEmail'

export default function EmailVerifyInput() {
  const [internalValues, setInternalValues] = useState<string[]>([])
  const [validationError, setValidationError] = useState<string | null>(null)
  const [nextInputIndex, setNextInputIndex] = useState<number | null>(null)
  const { code: verificationCode } = useRecoilValue(verificationCodeState)
  const createdUser = useRecoilValue(createUserState)

  const { mutate } = useMutation(
    (data: VerificationCodeRequest) => {
      const service = new VerifyEmail()
      return service.verifyEmail(data.token, data.email)
    },
    {
      onSuccess({ data }) {
        console.log(data)
      },
      onError(error) {
        const err = error as AxiosError<BaseHttpError>
        console.log(err.response?.data.message)
      },
    },
  )

  function handleNextInput(text: string, index: number) {
    let newInputIndex: number

    if (!text) {
      newInputIndex = index === 0 ? 0 : index - 1
      setNextInputIndex(newInputIndex)
    } else {
      const lastInputIndex = verificationCode.length - 1
      newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1
      setNextInputIndex(newInputIndex)
    }
  }

  function handleChange(text: string, index: number) {
    const newValues = [...internalValues]
    newValues[index] = text.toUpperCase()
    setInternalValues(newValues)
    handleNextInput(text, index)
    if (validationError !== null) setValidationError(null)
  }

  async function onSubmit() {
    const enteredCode = internalValues.join('')
    if (enteredCode !== verificationCode) {
      setValidationError('Code is incorrect')
    } else {
      mutate({
        token: enteredCode,
        email: createdUser.email,
      })
    }
  }

  return (
    <View className="space-y-8">
      <View className="flex-row items-center space-x-4 justify-center">
        {Array.from({ length: verificationCode.length }).map((_, index) => (
          <View key={index}>
            <OptInputBox
              index={index}
              nextInputIndex={nextInputIndex}
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
