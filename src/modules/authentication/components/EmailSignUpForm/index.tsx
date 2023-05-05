import { Ionicons } from '@expo/vector-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import Button from '../../../../shared/components/Button'
import { AuthStackParamList } from '../../routes/types'
import { SignUpFormProps, SignUpFormSchema } from '../../schemas/sign-up-form'
import ControlledInput from '../../../../shared/components/ControlledInput'
import { useSetRecoilState } from 'recoil'
import { createUserState } from '../../state/create-user-state'

export default function EmailSignUpForm() {
  const navigation = useNavigation<AuthStackParamList>()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<SignUpFormProps>({
    resolver: zodResolver(SignUpFormSchema),
  })
  const setCreateUserState = useSetRecoilState(createUserState)

  async function handleSignUp(data: SignUpFormProps) {
    if (!isValid) return

    setCreateUserState(data)
    navigation.replace('VerifyEmail')
  }

  return (
    <View className="space-y-4">
      <View className="space-y-2">
        <ControlledInput
          placeholder="Full Name"
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
      <View className="space-y-12">
        <View>
          <Button
            title="Continue"
            variant="solid"
            textStyles={{ textTransform: 'uppercase' }}
            onPress={handleSubmit(handleSignUp)}
            disabled={isDirty && !isValid}
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
