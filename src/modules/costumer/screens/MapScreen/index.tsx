import { SafeAreaView } from 'react-native-safe-area-context'
import { ServiceProviderData } from '../../utils/view-model/abstract-service-provider-presenter'
import HomeScreen from '../material-top-bar/best-seller/HomeScreen'

interface MapScreenProps {
  item: ServiceProviderData
}

export default function MapScreen() {
  return (
    <SafeAreaView className="flex-1 bg-red-500">
      <HomeScreen />
    </SafeAreaView>
  )
}
