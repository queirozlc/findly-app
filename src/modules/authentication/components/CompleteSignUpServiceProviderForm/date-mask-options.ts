import { TextInputMaskOptionProp } from 'react-native-masked-text'

export const dateMaskOptions: TextInputMaskOptionProp = {
  format: 'DD/MM/YYYY',
  // validator: (value: string): boolean => {
  //   const [day, month, year] = value.split('/')
  //   return (
  //     parseInt(day) > 31 &&
  //     parseInt(month) > 12 &&
  //     parseInt(year) <= new Date().getFullYear()
  //   )
  // },
}
