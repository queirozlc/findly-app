import { Country, CountryCode } from 'react-native-country-picker-modal'
import { CountryPicker } from 'react-native-country-picker-modal/lib/CountryPicker'
import { FieldError } from 'react-hook-form'

type Props = {
  countryCode: CountryCode | undefined
  onSelect(country: Country): void
  error?: FieldError
  hasError?: boolean
}

export default function CountryCodePickerInput({
  countryCode,
  onSelect,
  hasError,
  error,
}: Props) {
  return (
    <CountryPicker
      {...{
        allowFontScaling: true,
        countryCode,
        onSelect,
        withFilter: true,
        withFlag: true,
        withCloseButton: true,
        withEmoji: true,
        preferredCountries: ['BR', 'US'],
      }}
    />
  )
}
