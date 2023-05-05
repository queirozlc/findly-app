import { Ionicons } from '@expo/vector-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { Image, Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import Button from '../../../../shared/components/Button'
import { SignInRequest } from '../../../../shared/types/sign-in-request'
import useAuthenticationContext from '../../hooks/useAuthenticationContext'
import { AuthStackParamList } from '../../routes/types'
import { SignInFormSchema, SignInFormValues } from '../../schemas/sign-in-form'
import SignInFooter from '../SignInFooter'
import ControlledInput from '../../../../shared/components/ControlledInput'
import { useForm } from 'react-hook-form'

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
          />

          {errors.email && (
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require('../../../../../assets/error_icon.png')}
                resizeMode={'contain'}
                className="w-5 h-5"
              />
              <Text className="text-sm text-red-500 font-poppins-semi text-center">
                {errors.email.message}
              </Text>
            </View>
          )}
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

          {/* Errors here */}
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
