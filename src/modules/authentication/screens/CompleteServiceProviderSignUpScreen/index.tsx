import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import CompleteSignUpServiceProviderForm from '../../components/CompleteSignUpServiceProviderForm'

export default function CompleteServiceProviderSignUpScreen() {
  return (
    <View className={'flex-1 bg-white'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <CompleteSignUpServiceProviderForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}
