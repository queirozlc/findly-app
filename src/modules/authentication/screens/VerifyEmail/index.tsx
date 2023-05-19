import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import AuthBanner from '../../components/AuthBanner'
import EmailVerifyInputCard from '../../components/EmailVerifyInput/EmailVerifyInputCard'
import EmailVerifyInput from '../../components/EmailVerifyInput'
import VerifyEmailFooter from '../../components/VerifyEmailFooter'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthPropsNavigation } from '../../routes/types'

type RouteProps = NativeStackScreenProps<AuthPropsNavigation, 'VerifyEmail'>
export default function VerifyEmailScreen({ route }: RouteProps) {
  const { code } = route.params
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        className="flex-1 bg-white space-y-10"
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      >
        <View>
          <AuthBanner />
        </View>

        <View>
          <EmailVerifyInputCard>
            <EmailVerifyInput verificationCode={code} />
          </EmailVerifyInputCard>
        </View>

        <View>
          <VerifyEmailFooter />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
