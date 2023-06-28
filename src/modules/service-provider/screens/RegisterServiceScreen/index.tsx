import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import { z } from 'zod'
import Button from '../../../../shared/components/Button'
import ControlledInput from '../../../../shared/components/ControlledInput'
import ControlledInputMask from '../../../../shared/components/ControlledInputMask'
import RegisterServiceImagePicker from '../../components/RegisterServiceImagePicker'
import ServiceDescription from '../../components/ServiceDescription'

const schema = z.object({
  title: z.string().nonempty({ message: 'Título do serviço é obrigatório' }),
  price: z
    .string()
    .nonempty({ message: 'Preço é obrigatório' })
    .transform((value) => {
      // convert value to number without mask
      return Number(value.replace(/[^0-9]/g, '')) / 100 // 100 to convert to cents
    })
    .refine(
      (value) => {
        return value > 2
      },
      { message: 'Preço deve ser maior que R$ 2,00' },
    ),
})

type FormData = z.infer<typeof schema>
export default function RegisterServiceScreen() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  return (
    <View className={'flex-1 bg-white space-y-2'}>
      <View>
        <RegisterServiceImagePicker />
      </View>

      <View className={'px-4 space-y-2'}>
        <View className={'space-y-4'}>
          <View>
            <View className="space-y-2">
              <View>
                <ControlledInput
                  control={control}
                  label={'Título do serviço'}
                  required
                  name={'title'}
                  error={errors.title}
                />
              </View>
              <View>
                <ControlledInputMask
                  type="money"
                  placeholder="R$ 0,00"
                  capitalize="none"
                  control={control}
                  name="price"
                  label={'Preço'}
                  required
                  error={errors.price}
                />
              </View>
            </View>
          </View>

          <View>
            <ServiceDescription />
          </View>
        </View>

        <View>
          <Button
            title={'Cadastrar serviço'}
            variant="orderNotification"
            onPress={handleSubmit((data) => console.log(data))}
          />
        </View>
      </View>
    </View>
  )
}
