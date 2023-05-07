import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import RegisterServiceProviderPhoneForm from '../../components/RegisterServiceProviderPhoneForm'

export default function RegisterServiceProviderPhoneScreen() {
  return (
    <View className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <RegisterServiceProviderPhoneForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}
