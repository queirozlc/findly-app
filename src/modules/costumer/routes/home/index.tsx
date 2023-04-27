import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CostumerMaterialTabCategories from '../categories'
import { CostumerHomeStackParamList } from './home-types'

const Stack = createNativeStackNavigator<CostumerHomeStackParamList>()

export default function CostumerHomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CostumerMaterialTabCategories}
      />
    </Stack.Navigator>
  )
}
