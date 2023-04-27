import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { AuthStackParamList } from '../../routes/types'
import ForgotPasswordForm from '../ForgotPasswordForm'

export default function ForgotPasswordCard() {
  const navigation = useNavigation<AuthStackParamList>()

  return (
    <View
      className="px-5 py-5 pb-7 bg-white rounded-xl space-y-7"
      style={{
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        shadowColor: '#000',
      }}
    >
      <View className="space-y-4">
        <Text className="text-2xl font-bold text-center text-black">
          Forgot Password
        </Text>

        <Text className="text-left text-sm text-black">
          Please enter the email address you’d like your password reset
          information sent to
        </Text>
      </View>

      <View>
        <ForgotPasswordForm />
      </View>

      <View>
        <Text
          className="text-center text-lg text-brand-violet-500 font-poppins-semi"
          onPress={() => navigation.navigate('SignIn')}
        >
          Back to Login
        </Text>
      </View>
    </View>
  )
}
