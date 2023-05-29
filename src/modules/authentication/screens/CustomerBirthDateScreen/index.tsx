import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import CustomerBirthDateForm from '../../components/CustomerBirthDateForm'

export default function CustomerBirthDateScreen() {
  return (
    <View className="flex-1 bg-white py-20 px-4">
      <TouchableWithoutFeedback>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
          className="px-4 pt-10 pb-7 bg-white rounded-xl space-y-7"
          style={{
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 10,
            shadowColor: '#000',
          }}
        >
          <CustomerBirthDateForm />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  )
}
