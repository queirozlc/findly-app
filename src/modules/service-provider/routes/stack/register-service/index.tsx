import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RegisterServiceStackParamList } from './types'
import RegisterServiceScreen from '../../../screens/RegisterServiceScreen'
import RegisterServiceHeader from '../../../components/RegisterServiceHeader'

const { Navigator, Screen } =
  createNativeStackNavigator<RegisterServiceStackParamList>()

export default function RegisterServiceStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        options={{
          headerShown: true,
          header: () => <RegisterServiceHeader />,
        }}
        name="RegisterServiceScreen"
        component={RegisterServiceScreen}
      />
    </Navigator>
  )
}
