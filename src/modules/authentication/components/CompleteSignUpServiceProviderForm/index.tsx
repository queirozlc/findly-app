import { Text, View } from 'react-native'
import { useForm } from 'react-hook-form'
import {
  CompleteSignUpServiceProviderDTO,
  CompleteSignUpServiceProviderSchema,
} from '../../schemas/sign-up-service-provider'
import { zodResolver } from '@hookform/resolvers/zod'
import ControlledInputMask from '../../../../shared/components/ControlledInputMask'
import { dateMaskOptions } from './date-mask-options'
import Button from '../../../../shared/components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthStackParamList } from '../../routes/types'
import { useSetRecoilState } from 'recoil'
import { createServiceProviderState } from '../../state/create-service-provider-state'

export default function CompleteSignUpServiceProviderForm() {
  const navigation = useNavigation<AuthStackParamList>()
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<CompleteSignUpServiceProviderDTO>({
    resolver: zodResolver(CompleteSignUpServiceProviderSchema),
  })
  const setCreateServiceProviderState = useSetRecoilState(
    createServiceProviderState,
  )

  function onSubmit({
    cpf,
    cnpj,
    birthDate,
  }: CompleteSignUpServiceProviderDTO) {
    setCreateServiceProviderState((prev) => ({
      ...prev,
      cpf,
      cnpj,
      birthDate,
    }))
    navigation.replace('VerifyEmail')
  }

  return (
    <View className={'space-y-4 px-4 mt-8'}>
      <View>
        <ControlledInputMask
          type={'datetime'}
          options={dateMaskOptions}
          label={'Birth date'}
          control={control}
          name={'birthDate'}
          placeholder={'Enter your birth date: DD/MM/YYYY'}
          hasError={!!(errors.birthDate && isDirty && !isValid)}
          error={errors.birthDate}
          keyboardType={'numeric'}
        />
      </View>
      <View>
        <ControlledInputMask
          type={'cnpj'}
          label={'Cnpj (for companies)'}
          control={control}
          name="cnpj"
          placeholder={'Ex: 00.000.000/0000-00'}
          hasError={!!(errors.cnpj && isDirty && !isValid)}
          error={errors.cnpj}
          keyboardType={'numeric'}
        />
      </View>
      <View>
        <ControlledInputMask
          type={'cpf'}
          label={'Cpf (for individuals)'}
          control={control}
          name={'cpf'}
          placeholder={'Ex: 000.000.000-00'}
          hasError={!!(errors.cpf && isDirty && !isValid)}
          error={errors.cpf}
          keyboardType={'numeric'}
        />
      </View>

      <View className={'space-y-8'}>
        <View>
          <Button
            title={'Continue'}
            variant={'solid'}
            onPress={handleSubmit(onSubmit)}
          />
        </View>

        <View className="flex-row items-center space-x-2 justify-center">
          <Text className="font-inter-medium text-dark-gray-500 text-base">
            Already have an account?
          </Text>
          <Text
            className="text-brand-violet-500 underline text-base font-poppins-black"
            onPress={() => navigation.navigate('UsernamePasswordSignIn')}
          >
            Sign In
          </Text>
        </View>
      </View>
    </View>
  )
}
