import { View } from 'react-native'
import Button from '../../../../shared/components/Button'
import Input from '../../../../shared/components/Input'

export default function ForgotPasswordForm() {
  return (
    <View className="space-y-6">
      <View>
        <Input
          label="Enter your email address"
          capitalize="none"
          keyboardType="default"
          placeholder="name@email.com"
        />
      </View>

      <View>
        <Button
          title="Request Reset Link"
          variant="solid"
          textStyles={{ textTransform: 'uppercase' }}
        />
      </View>
    </View>
  )
}
