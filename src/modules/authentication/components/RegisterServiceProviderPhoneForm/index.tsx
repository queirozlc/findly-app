import { Controller, useForm } from 'react-hook-form'
import {
  SignUpServiceProviderPhoneDTO,
  SignUpServiceProviderPhoneSchema,
} from '../../schemas/sign-up-service-provider'
import { zodResolver } from '@hookform/resolvers/zod'
import { Image, Text, View } from 'react-native'
import { useState } from 'react'
import { Country, CountryCode } from 'react-native-country-picker-modal'
import ControlledInputMask from '../../../../shared/components/ControlledInputMask'
import Button from '../../../../shared/components/Button'
import CountryCodePickerInput from '../../../../shared/components/ControlledCountryPicker'

export default function RegisterServiceProviderPhoneForm() {
  const [countryCode, setCountryCode] = useState<CountryCode | undefined>()
  const [country, setCountry] = useState<Country>({} as Country)
  const [countryCodeError, setCountryCodeError] = useState('')
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<SignUpServiceProviderPhoneDTO>({
    resolver: zodResolver(SignUpServiceProviderPhoneSchema),
  })
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCountry(country)
    setValue('countryCode', `+${country.callingCode[0]}`)
    console.log(getValues('countryCode'))
  }

  function onSubmit(data: SignUpServiceProviderPhoneDTO) {
    console.log(data)
  }

  return (
    <View className={`space-y-10 ${errors && 'space-y-4'}`}>
      <View className={'flex-row items-center space-x-2'}>
        <View className={`space-y-2.5 ${errors.countryCode && 'mt-7'}`}>
          <Text className="font-inter-medium text-base capitalize">
            Country code
          </Text>
          <View
            className={`border ${
              errors.countryCode && isDirty && !isValid
                ? 'border-error-500'
                : 'border-primary-500'
            } px-2 w-28 h-14 flex-row items-center rounded-md`}
          >
            <Controller
              control={control}
              name={'countryCode'}
              render={() => (
                <CountryCodePickerInput
                  countryCode={countryCode}
                  onSelect={onSelect}
                />
              )}
            />

            {country.callingCode && (
              <Text className="font-inter-medium text-base text-dark-gray-500">
                +{country.callingCode[0]}
              </Text>
            )}
          </View>

          {errors.countryCode && isDirty && !isValid && (
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require('../../../../../assets/error_icon.png')}
                resizeMode={'contain'}
                className="w-5 h-5"
              />
              <Text className="text-sm text-red-500 font-poppins-semi text-center">
                {errors.countryCode?.message}
              </Text>
            </View>
          )}
        </View>

        <View className={`flex-1 ${errors.number && 'mt-7'}`}>
          <ControlledInputMask
            label={'Phone Number'}
            control={control}
            name={'number'}
            type={'cel-phone'}
            keyboardType={'numeric'}
            placeholder="(99) 999999-9999"
            error={errors.number}
            hasError={!!errors.number}
          />
        </View>
      </View>

      <View>
        <Button
          title={'Continue'}
          variant={'orderNotification'}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid && !!(errors.number || errors.countryCode)}
        />
      </View>
    </View>
  )
}
