import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { AxiosError, AxiosResponse } from 'axios'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { useMutation, UseMutationResult } from 'react-query'
import { useRecoilState, useSetRecoilState } from 'recoil'
import Button from '../../../../shared/components/Button'
import ControlledCountryCodePickerInput from '../../../../shared/components/ControlledCountryPicker'
import ControlledInputMask from '../../../../shared/components/ControlledInputMask'
import { VerificationCode } from '../../../../shared/types/verification-code'
import { CreateServiceProviderService } from '../../../service-provider/api/create-service-provider/create-service-provider'
import { AuthStackParamList } from '../../routes/types'
import {
  SignUpServiceProviderPhoneDTO,
  SignUpServiceProviderPhoneSchema,
} from '../../schemas/sign-up-service-provider'
import { createServiceProviderState } from '../../state/create-service-provider-state'
import { verificationCodeState } from '../../state/verification-code-state'

export default function RegisterServiceProviderPhoneForm() {
  const [createServiceProviderValue, setCreateServiceProvider] = useRecoilState(
    createServiceProviderState,
  )
  const navigation = useNavigation<AuthStackParamList>()
  const setVerificationCode = useSetRecoilState(verificationCodeState)
  const createServiceProvider = new CreateServiceProviderService()
  const {
    data: response,
    error,
    isLoading,
    mutate,
  }: UseMutationResult<
    AxiosResponse<VerificationCode>,
    AxiosError<any>,
    SignUpServiceProviderPhoneDTO
  > = useMutation(() => {
    return createServiceProvider.execute(createServiceProviderValue)
  })
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid },
  } = useForm<SignUpServiceProviderPhoneDTO>({
    resolver: zodResolver(SignUpServiceProviderPhoneSchema),
  })

  function onSubmit({ countryCode, number }: SignUpServiceProviderPhoneDTO) {
    const areaCode = number.substring(1, 3)
    const phoneNumber = number.substring(4, 15).trim()
    setCreateServiceProvider((prevState) => ({
      ...prevState,
      phone: {
        countryCode,
        areaCode,
        number: phoneNumber,
      },
    }))
    mutate({
      countryCode,
      number: phoneNumber,
    })
  }

  return (
    <View className={`space-y-10`}>
      <View className={'flex-row items-center space-x-2'}>
        <View>
          <ControlledCountryCodePickerInput
            control={control}
            hasError={!!errors.countryCode && !isValid}
            error={errors.countryCode}
            setValue={setValue}
          />
        </View>

        <View
          className={`flex-1 ${errors.number && !errors.countryCode && 'mt-0'}`}
        >
          <ControlledInputMask
            label={'Phone Number'}
            control={control}
            name={'number'}
            type={'cel-phone'}
            keyboardType={'numeric'}
            placeholder="(99) 999999-9999"
            error={errors.number}
            hasError={!!errors.number}
          />
        </View>
      </View>

      <View>
        <View className={'flex-row items-center space-x-2'}>
          {error && error.response && (
            <Text className={'text-error-500 font-inter-semi text-sm'}>
              {error.response.data.message}
            </Text>
          )}
        </View>
        <Button
          title={'Continue'}
          variant={'orderNotification'}
          onPress={handleSubmit(onSubmit)}
          disabled={
            (!isValid && !!(errors.number || errors.countryCode)) || isLoading
          }
          isLoading={isLoading}
        />
      </View>
    </View>
  )
}
