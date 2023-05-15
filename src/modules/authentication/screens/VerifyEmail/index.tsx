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

export default function VerifyEmailScreen() {
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
            <EmailVerifyInput />
          </EmailVerifyInputCard>
        </View>

        <View>
          <VerifyEmailFooter />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
