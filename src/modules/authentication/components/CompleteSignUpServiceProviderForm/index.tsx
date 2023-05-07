import { View } from 'react-native'
import ControlledInput from '../../../../shared/components/ControlledInput'
import { useForm } from 'react-hook-form'
import { SignUpServiceProviderDTO } from '../../schemas/sign-up-service-provider'
import { SignUpFormSchema } from '../../schemas/sign-up-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function CompleteSignUpServiceProviderForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty, isLoading },
  } = useForm<SignUpServiceProviderDTO>({
    resolver: zodResolver(SignUpFormSchema),
  })

  return (
    <View className={'space-y-4 px-4 mt-8'}>
      <View>
        <ControlledInput
          label={'Birth date'}
          control={control}
          name={'birthDate'}
          placeholder={'Enter your birth date: DD/MM/YYYY'}
          hasError={!!(errors.birthDate && isDirty && !isValid)}
          error={errors.birthDate}
        />
      </View>
      <View>
        <ControlledInput
          label={'Cnpj (for companies)'}
          control={control}
          name={'cnpj'}
          placeholder={'Ex: 00.000.000/0000-00'}
          hasError={!!(errors.birthDate && isDirty && !isValid)}
          error={errors.birthDate}
        />
      </View>
    </View>
  )
}
