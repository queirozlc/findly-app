import { Text, TextProps } from 'react-native'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  style?: TextProps['style']
}

export default function TextTitle({ children, style }: Props) {
  return (
    <Text className="text-xl font-poppins-bold" style={style}>
      {children}
    </Text>
  )
}
