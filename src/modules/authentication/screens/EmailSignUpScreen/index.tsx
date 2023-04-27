import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import AuthBanner from '../../components/AuthBanner'
import EmailSignUpForm from '../../components/EmailSignUpForm'

export default function EmailSignUpScreen() {
  return (
    <View className="flex-1 bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled={true}>
          <AuthBanner />
          <View className="mt-10 px-5">
            <EmailSignUpForm />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  )
}
