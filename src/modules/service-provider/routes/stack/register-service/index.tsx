import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterServiceHeader from '../../../components/RegisterServiceHeader'
import RegisterServiceScreen from '../../../screens/RegisterServiceScreen'
import ServiceDescriptionScreen from '../../../screens/ServiceDescriptionScreen'
import { RegisterServiceStackParamList } from './types'

const Stack = createNativeStackNavigator<RegisterServiceStackParamList>()

export default function RegisterServiceStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <RegisterServiceHeader label={'Cadastrar serviço'} />,
        }}
        name="RegisterServiceScreen"
        component={RegisterServiceScreen}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          header() {
            return (
              <RegisterServiceHeader
                label={'Descrição do serviço'}
                canGoBack={true}
              />
            )
          },
        }}
        name="ServiceDescription"
        component={ServiceDescriptionScreen}
      />
    </Stack.Navigator>
  )
}
