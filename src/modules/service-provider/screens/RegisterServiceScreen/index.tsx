import { View } from 'react-native'
import Button from '../../../../shared/components/Button'
import RegisterServiceImagePicker from '../../components/RegisterServiceImagePicker'
import RegisterServiceInputs from '../../components/RegisterServiceInputs'
import ServiceDescription from '../../components/ServiceDescription'

export default function RegisterServiceScreen() {
  return (
    <View className={'flex-1 bg-white space-y-2'}>
      <View>
        <RegisterServiceImagePicker />
      </View>

      <View className={'px-4 space-y-2'}>
        <View className={'space-y-4'}>
          <View>
            <RegisterServiceInputs />
          </View>

          <View>
            <ServiceDescription />
          </View>
        </View>

        <View>
          <Button title={'Cadastrar serviço'} variant="orderNotification" />
        </View>
      </View>
    </View>
  )
}
