import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { useMutation } from 'react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Button from '../../../../shared/components/Button'
import ControlledInputMask from '../../../../shared/components/ControlledInputMask'
import { BaseHttpError } from '../../../../shared/errors/BaseHttpError'
import { CreateCostumerRequest } from '../../../costumer/api/dtos/create-costumer-request'
import { CostumerApiService } from '../../../costumer/api/services/costumer-api'
import { AuthStackParamList } from '../../routes/types'
import {
  DateOfBirthSchema,
  FormDateOfBirthProps,
} from '../../schemas/sign-up-form'
import { createUserState } from '../../state/create-user-state'
import { isAuthenticated } from '../../state/is-authenticated'
import { verificationCodeState } from '../../state/verification-code-state'
import { dateMaskOptions } from '../CompleteSignUpServiceProviderForm/date-mask-options'

export default function CustomerBirthDateForm() {
  const navigation = useNavigation<AuthStackParamList>()
  const signUpCustomerRequest = useRecoilValue(createUserState)
  const customerService = new CostumerApiService()
  const setIsAuthenticated = useSetRecoilState(isAuthenticated)
  const setVerificationCode = useSetRecoilState(verificationCodeState)
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<FormDateOfBirthProps>({
    resolver: zodResolver(DateOfBirthSchema),
  })
  const {
    mutate,
    data: response,
    error,
  } = useMutation(
    (data: CreateCostumerRequest) => customerService.createCostumer(data),
    {
      onError: (error: AxiosError<BaseHttpError>) => {
        console.log(error.response?.data.message)
      },
      onSuccess({ data }) {
        setVerificationCode({
          code: data.code,
        })

        navigation.replace('VerifyEmail', { code: data.code })
      },
    },
  )

  async function onSubmit({ birthDate }: FormDateOfBirthProps) {
    mutate({
      ...signUpCustomerRequest,
      birthDate,
    })
  }

  return (
    <View className="space-y-6">
      <View>
        <Text className="text-2xl font-inter-semi text-center">
          Qual a sua data de nascimento?
        </Text>
      </View>

      <View>
        <ControlledInputMask
          type={'datetime'}
          options={dateMaskOptions}
          label={'Data de nascimento *'}
          control={control}
          name={'birthDate'}
          placeholder={'Digite sua data de nascimento: DD/MM/YYYY'}
          hasError={!!(errors.birthDate && isDirty && !isValid)}
          error={errors.birthDate}
          keyboardType={'numeric'}
        />
      </View>

      <View>
        <Button
          title="Continue"
          variant="orderNotification"
          onPress={handleSubmit(onSubmit)}
          disabled={!!(errors.birthDate && isDirty && !isValid)}
        />
      </View>
    </View>
  )
}
