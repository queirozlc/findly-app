import { View } from 'react-native'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function ShadowBoxCard({ children }: Props) {
  return (
    <View className="px-4">
      <View
        className="w-full px-4 py-6 bg-white rounded-xl space-y-4"
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowRadius: 1,
          shadowOpacity: 0.2,
          elevation: 5,
        }}
      >
        {children}
      </View>
    </View>
  )
}
