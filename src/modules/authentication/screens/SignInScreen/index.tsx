import { View } from 'react-native'
import AuthBanner from '../../components/AuthBanner'
import AuthButtons from '../../components/AuthButtons'
import SignInFooter from '../../components/SignInFooter'

export default function SignInScreen() {
  return (
    <View className="space-y-24 flex-1 bg-white">
      <AuthBanner />
      <View className="px-8">
        <AuthButtons view="sign-up" />
      </View>
      <View className="items-center">
        <SignInFooter view="sign-in" />
      </View>
    </View>
  )
}
