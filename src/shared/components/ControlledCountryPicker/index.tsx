import { Country, CountryCode } from 'react-native-country-picker-modal'
import { Control, Controller, FieldError } from 'react-hook-form'
import { SignUpServiceProviderPhoneDTO } from '../../../modules/authentication/schemas/sign-up-service-provider'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { createServiceProviderState } from '../../../modules/authentication/state/create-service-provider-state'
import { CountryPicker } from 'react-native-country-picker-modal/lib/CountryPicker'

type Props = {
  error?: FieldError
  hasError?: boolean
  control: Control<SignUpServiceProviderPhoneDTO>
  setValue?: (
    name: keyof SignUpServiceProviderPhoneDTO,
    value: SignUpServiceProviderPhoneDTO[keyof SignUpServiceProviderPhoneDTO],
  ) => void
}

export default function ControlledCountryCodePickerInput({
  hasError,
  error,
  control,
  setValue,
}: Props) {
  const [countryCode, setCountryCode] = useState<CountryCode | undefined>()
  const [country, setCountry] = useState<Country>({} as Country)
  const [countryPickerVisible, setCountryPickerVisible] = useState(false)
  const setCreateServiceProviderState = useSetRecoilState(
    createServiceProviderState,
  )

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCountry(country)
    if (setValue) {
      setValue('countryCode', `+${country.callingCode[0]}`)
    }
  }

  return (
    <View className={'space-y-2 '}>
      <Text className="font-inter-medium text-base capitalize">
        Country code
      </Text>
      <TouchableOpacity
        onPress={() => setCountryPickerVisible(true)}
        activeOpacity={0.8}
        className={`border  ${
          hasError ? 'border-error-500' : 'border-primary-500'
        }
              px-2 w-28 h-14 flex-row items-center rounded-md`}
      >
        <Controller
          control={control}
          name={'countryCode'}
          render={() => (
            <CountryPicker
              {...{
                allowFontScaling: true,
                countryCode,
                onSelect,
                withFilter: true,
                withFlagButton: true,
                withCloseButton: true,
                preferredCountries: ['BR', 'US'],
                placeholder: '',
                modalProps: {
                  visible: countryPickerVisible,
                },
                onClose: () => setCountryPickerVisible(false),
              }}
            />
          )}
        />

        {country.callingCode && (
          <View>
            <Text className="font-inter-medium text-base text-dark-gray-500">
              +{country.callingCode[0]}
            </Text>
          </View>
        )}
      </TouchableOpacity>

      {error && hasError && (
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require('../../../../assets/error_icon.png')}
            resizeMode={'contain'}
            className="w-5 h-5"
          />
          <Text className="text-sm text-red-500 font-poppins-semi text-center">
            {error.message}
          </Text>
        </View>
      )}
    </View>
  )
}
