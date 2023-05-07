import { Text, View } from 'react-native'
import ControlledInput from '../../../../shared/components/ControlledInput'
import { Ionicons } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import Button from '../../../../shared/components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthStackParamList } from '../../routes/types'
import { useForm } from 'react-hook-form'
import { SignUpFormSchema } from '../../schemas/sign-up-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SignUpServiceProviderDTO } from '../../schemas/sign-up-service-provider'
import { useSetRecoilState } from 'recoil'
import { createServiceProviderState } from '../../state/create-service-provider-state'

export default function SignUpServiceProviderForm() {
  const navigation = useNavigation<AuthStackParamList>()
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty, isLoading },
  } = useForm<SignUpServiceProviderDTO>({
    resolver: zodResolver(SignUpFormSchema),
  })
  const [passwordVisible, setPasswordVisible] = useState(false)
  const setCreateServiceProviderRequestState = useSetRecoilState(
    createServiceProviderState,
  )

  async function handleSignUp(data: SignUpServiceProviderDTO) {
    setCreateServiceProviderRequestState(data)
    navigation.navigate('CompleteServiceProviderSignUp')
  }

  return (
    <View className="space-y-4 px-4 mt-8">
      <View>
        <ControlledInput
          placeholder="Name"
          label="Full Name"
          capitalize="words"
          control={control}
          name="name"
          hasError={!!(errors.name && isDirty && !isValid)}
          error={errors.name}
        />
      </View>

      <View>
        <ControlledInput
          placeholder="Email"
          label="Email"
          capitalize="none"
          control={control}
          name="email"
          hasError={!!(errors.email && isDirty && !isValid)}
          error={errors.email}
        />
      </View>

      <View>
        <ControlledInput
          placeholder="Password"
          control={control}
          label="Password"
          name="password"
          keyboardType="default"
          secureTextEntry={!passwordVisible}
          capitalize="none"
          error={errors.password}
          hasError={!!(errors.password && isDirty && !isValid)}
          icon={
            passwordVisible ? (
              <Ionicons
                name="eye-outline"
                size={24}
                color={colors.zinc['400']}
              />
            ) : (
              <Ionicons
                name="eye-off-outline"
                size={24}
                color={colors.zinc['400']}
              />
            )
          }
          onTouchablePress={() => setPasswordVisible(!passwordVisible)}
        />
      </View>
      <View className="space-y-8">
        <View>
          <Button
            title="Continue"
            variant="solid"
            textStyles={{ textTransform: 'uppercase' }}
            onPress={handleSubmit(handleSignUp)}
            disabled={isDirty && !isValid}
            isLoading={isLoading}
          />
        </View>

        <View>
          <Text className="text-center text-base font-inter-medium text-black">
            Have an account already?{' '}
            <Text
              className="text-base font-poppins-semi text-brand-violet-500 underline"
              onPress={() => navigation.navigate('SignIn')}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  )
}
