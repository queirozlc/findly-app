import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CostumerNavigationHeader from '../../../components/CostumerNavigationHeader'
import CostumerMaterialTabCategories from '../../top-bar/categories'
import { CostumerHomeStackParamList } from './home-types'

const Stack = createNativeStackNavigator<CostumerHomeStackParamList>()

export default function CostumerHomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarStyle: 'dark',
      }}
    >
      <Stack.Screen
        options={{
          header: () => <CostumerNavigationHeader />,
        }}
        name="Categories"
        component={CostumerMaterialTabCategories}
      />
    </Stack.Navigator>
  )
}
