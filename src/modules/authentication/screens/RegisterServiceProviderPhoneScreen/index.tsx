import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import RegisterServiceProviderPhoneForm from '../../components/RegisterServiceProviderPhoneForm'
import RegisterServiceProviderPhoneCard from '../../components/RegisterServiceProviderPhoneForm/RegisterServiceProviderPhoneCard'

export default function RegisterServiceProviderPhoneScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-white space-y-10 pt-10">
        <RegisterServiceProviderPhoneCard>
          <RegisterServiceProviderPhoneForm />
        </RegisterServiceProviderPhoneCard>
      </View>
    </TouchableWithoutFeedback>
  )
}
