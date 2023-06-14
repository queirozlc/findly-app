import { View } from 'react-native'
import Input from '../../../../shared/components/Input'

export default function RegisterServiceInputs() {
  return (
    <View className="space-y-6">
      <View>
        <Input label={'Título do serviço'} required />
      </View>
      <View>
        <Input label={'Preço'} required />
      </View>
    </View>
  )
}
