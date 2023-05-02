import { Ionicons } from '@expo/vector-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import Button from '../../../../shared/components/Button'
import Input from '../../../../shared/components/Input'
import { SignInRequest } from '../../../../shared/types/sign-in-request'
import useAuthenticationContext from '../../hooks/useAuthenticationContext'
import { AuthStackParamList } from '../../routes/types'
import { SignInFormSchema, SignInFormValues } from '../../schemas/sign-in-form'
import SignInFooter from '../SignInFooter'

export default function EmailSignInForm() {
  const navigation = useNavigation<AuthStackParamList>()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(SignInFormSchema),
  })
  const { login } = useAuthenticationContext()

  async function signIn(data: SignInRequest) {
    try {
      setIsLoading(true)
      const response = await login(data)
      console.log(response)
    } catch (error) {
      const { response } = error as AxiosError
      console.log(response?.data)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View className="space-y-10">
      <View className="space-y-4">
        <View>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <Input
                placeholder="name@email.com"
                label="Email"
                keyboardType="default"
                capitalize="none"
                onChange={onChange}
              />
            )}
          />
        </View>

        <View>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange } }) => (
              <Input
                placeholder="min. 6 characters"
                label="Password"
                keyboardType="default"
                secureTextEntry={!passwordVisible}
                capitalize="none"
                onChange={onChange}
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
            )}
          />
        </View>
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
