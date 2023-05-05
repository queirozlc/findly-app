import { Ionicons } from '@expo/vector-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import Button from '../../../../shared/components/Button'
import Input from '../../../../shared/components/Input'
import { AuthStackParamList } from '../../routes/types'
import { SignUpFormProps, SignUpFormSchema } from '../../schemas/sign-up-form'

export default function EmailSignUpForm() {
  const navigation = useNavigation<AuthStackParamList>()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<SignUpFormProps>({
    resolver: zodResolver(SignUpFormSchema),
  })

  function handleSignUp({ email, name, password }: SignUpFormProps) {
    if (errors) {
      console.log(errors)
    }
    console.log({ email, name, password })
  }

  return (
    <View className="space-y-5">
      <View>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Full Name"
              label="Full Name"
              capitalize="words"
              onChange={onChange}
            />
          )}
        />
      </View>

      <View>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Email"
              label="Email"
              capitalize="none"
              onChange={onChange}
            />
          )}
        />
      </View>

      <View>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Password"
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
      <View className="space-y-12">
        <View>
          <Button
            title="Continue"
            variant="solid"
            textStyles={{ textTransform: 'uppercase' }}
            onPress={handleSubmit(handleSignUp)}
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
