import { Control, Controller } from 'react-hook-form'
import Input, { InputProps } from '../Input'

export type ControlledInputProps = InputProps & {
  control: Control<any>
  name: string
}

export default function ControlledInput({
  control,
  name,
  ...rest
}: ControlledInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Input onChange={onChange} {...rest} value={value} />
      )}
    />
  )
}
