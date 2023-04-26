import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { AuthStackParamList } from '../../../../routes/types/auth-route'
import Button from '../../../../shared/components/Button'
import Input from '../../../../shared/components/Input'

export default function EmailSignInForm() {
  const navigation = useNavigation<AuthStackParamList>()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit() {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <View className="space-y-10">
      <View className="space-y-4">
        <View>
          <Input
            placeholder="name@email.com"
            label="Email"
            keyboardType="default"
            capitalize="none"
          />
        </View>

        <View>
          <Input
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
        </View>
      </View>

      <View>
        <Button
          title="Sign In"
          variant="solid"
          onPress={handleSubmit}
          isLoading={isLoading}
          disabled={isLoading}
        />

        <View className="flex flex-row justify-center mt-5">
          <Text
            className="text-base font-inter-medium text-dark-gray-500"
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            Forget your password?
          </Text>
        </View>
      </View>

      <View className="flex flex-row justify-center pt-10">
        <Text className="text-base font-inter-medium text-dark-gray-500">
          Don't have an account?{' '}
          <Text
            className="text-base font-inter-medium text-brand-violet-500 underline"
            onPress={() => navigation.navigate('SignUp')}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  )
}
