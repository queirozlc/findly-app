import { Ionicons } from '@expo/vector-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import Button from '../../../../shared/components/Button'
import ControlledInput from '../../../../shared/components/ControlledInput'
import { SignInRequest } from '../../../../shared/types/sign-in-request'
import { AuthStackParamList } from '../../routes/types'
import { SignInFormSchema, SignInFormValues } from '../../schemas/sign-in-form'
import SignInFooter from '../SignInFooter'
import { useAuth } from '../../hooks/useAuth'

export default function EmailSignInForm() {
  const [isLoading] = useState(false)
  const { signIn: signInMutation, error } = useAuth()
  const navigation = useNavigation<AuthStackParamList>()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(SignInFormSchema),
  })

  async function signIn(data: SignInRequest) {
    await signInMutation(data)
  }

  return (
    <View className="space-y-7">
      <View className="space-y-4">
        <View className="space-y-2">
          <ControlledInput
            name="email"
            control={control}
            placeholder="name@email.com"
            label="Email"
            keyboardType="default"
            capitalize="none"
            error={errors.email}
          />
        </View>

        <View>
          <ControlledInput
            name="password"
            control={control}
            placeholder="min. 6 characters"
            label="Password"
            keyboardType="default"
            secureTextEntry={!passwordVisible}
            capitalize="none"
            error={errors.password}
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

        {error && (
          <View className="flex flex-row justify-center">
            <Text className="text-base font-inter-medium text-error-500">
              {error}
            </Text>
          </View>
        )}
      </View>

      <View>
        <Button
          title="Sign In"
          variant="solid"
          onPress={handleSubmit(signIn)}
          isLoading={isLoading}
          disabled={isLoading}
        />

        <View className="flex flex-row justify-center mt-5">
          <Text
            className="text-base font-inter-medium text-dark-gray-500"
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            Forgot your password?
          </Text>
        </View>
      </View>

      <View>
        <SignInFooter view="sign-in" />
      </View>
    </View>
  )
}
