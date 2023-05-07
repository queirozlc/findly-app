import { Controller } from 'react-hook-form'
import { ControlledInputProps } from '../ControlledInput'
import InputMasked from '../InputMasked'
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text'

type ControlledInputMaskProps = ControlledInputProps & {
  type: TextInputMaskTypeProp
  options?: TextInputMaskOptionProp
}

export default function ControlledInputMask({
  control,
  name,
  type,
  options,
  ...rest
}: ControlledInputMaskProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <InputMasked
          type={type}
          onChange={onChange}
          value={value}
          {...rest}
          options={options}
        />
      )}
    />
  )
}
