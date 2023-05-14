import { TextInputMaskOptionProp } from 'react-native-masked-text'

export const countryCodeInputMaskOptions: TextInputMaskOptionProp = {
  mask: '+99',
  validator: function (value: string): boolean {
    return /^\+\d{1,3}$/.test(value)
  },
}
