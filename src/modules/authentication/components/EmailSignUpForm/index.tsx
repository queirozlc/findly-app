import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import Button from '../../../../shared/components/Button'
import Input from '../../../../shared/components/Input'
import { AuthStackParamList } from '../../routes/types'

export default function EmailSignUpForm() {
  const navigation = useNavigation<AuthStackParamList>()
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <View className="space-y-5">
      <View>
        <Input placeholder="Full Name" label="Full Name" capitalize="words" />
      </View>

      <View>
        <Input placeholder="Email" label="Email" capitalize="none" />
      </View>

      <View>
        <Input
          placeholder="Password"
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
      <View className="space-y-12">
        <View>
          <Button
            title="Continue"
            variant="solid"
            textStyles={{ textTransform: 'uppercase' }}
            onPress={() => navigation.navigate('CompleteSignUp')}
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
