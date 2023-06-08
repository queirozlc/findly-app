import { RouteProp } from '@react-navigation/native'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import AuthBanner from '../../components/AuthBanner'
import EmailVerifyInput from '../../components/EmailVerifyInput'
import EmailVerifyInputCard from '../../components/EmailVerifyInput/EmailVerifyInputCard'
import VerifyEmailFooter from '../../components/VerifyEmailFooter'
import { AuthPropsNavigation } from '../../routes/types'

type RouteProps = RouteProp<AuthPropsNavigation, 'VerifyEmail'>

export default function VerifyEmailScreen({ params }: any) {
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
