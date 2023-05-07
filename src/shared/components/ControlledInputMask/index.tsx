import { Controller } from 'react-hook-form'
import { ControlledInputProps } from '../ControlledInput'
import InputMasked from '../InputMasked'
import { TextInputMaskTypeProp } from 'react-native-masked-text'

type ControlledInputMaskProps = ControlledInputProps & {
  type: TextInputMaskTypeProp
}

export default function ControlledInputMask({
  control,
  name,
  type,
  ...rest
}: ControlledInputMaskProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <InputMasked type={type} onChange={onChange} value={value} {...rest} />
      )}
    />
  )
}
