import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../../../screens/ProfileScreen'
import { CostumerProfileStackParamList } from './types'

const Stack = createNativeStackNavigator<CostumerProfileStackParamList>()

export default function CostumerProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarStyle: 'dark',
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}
