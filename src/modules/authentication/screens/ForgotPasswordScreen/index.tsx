import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import AuthBanner from '../../components/AuthBanner'
import ForgotPasswordCard from '../../components/ForgotPasswordCard'

export default function ForgotPasswordScreen() {
  return (
    <View className="flex-1 bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled={true}>
          <AuthBanner />
          <View className="mt-10 px-6">
            <ForgotPasswordCard />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  )
}
