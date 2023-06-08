import { RecoilRoot } from 'recoil'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactNode, useState } from 'react'
import AuthProvider from '../../modules/authentication/contexts/authentication-context'

type Props = {
  children: ReactNode
}
export function Providers({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RecoilRoot>{children}</RecoilRoot>
          </AuthProvider>
        </QueryClientProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
