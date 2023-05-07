import { Text, View } from 'react-native'
import { useForm } from 'react-hook-form'
import {
  SignUpServiceProviderPhoneDTO,
  SignUpServiceProviderPhoneSchema,
} from '../../schemas/sign-up-service-provider'
import { zodResolver } from '@hookform/resolvers/zod'

export default function RegisterServiceProviderPhoneForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpServiceProviderPhoneDTO>({
    resolver: zodResolver(SignUpServiceProviderPhoneSchema),
  })

  return (
    <View>
      <Text>RegisterServiceProviderPhoneForm</Text>
    </View>
  )
}
