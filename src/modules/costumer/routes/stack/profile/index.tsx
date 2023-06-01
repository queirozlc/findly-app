import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../../../screens/ProfileScreen'
import { CostumerProfileStackParamList } from './types'

const Stack = createNativeStackNavigator<CostumerProfileStackParamList>()

export default function CostumerProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}
