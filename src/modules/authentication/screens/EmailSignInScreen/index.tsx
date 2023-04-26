import { View } from 'react-native'
import AuthBanner from '../../components/AuthBanner'
import EmailSignInForm from '../../components/EmailSignInForm'

export default function EmailSignInScreen() {
  return (
    <View className="space-y-24 flex-1 bg-white">
      <AuthBanner />

      <View className="px-8">
        <EmailSignInForm />
      </View>
    </View>
  )
}
