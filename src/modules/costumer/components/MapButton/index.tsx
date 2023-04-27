import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Dimensions, View } from 'react-native'
import Button from '../../../../shared/components/Button'
import { CostumerBestSellersNavigationProps } from '../../routes/stack/best-seller/types'

export default function MapButton() {
  const deviceWidth = Dimensions.get('window').width
  const navigation = useNavigation<CostumerBestSellersNavigationProps>()

  return (
    <View
      className="absolute w-28"
      style={{
        zIndex: 10,
        left: deviceWidth / 2 - 50,
        bottom: 10,
      }}
    >
      <Button
        title="Map"
        icon={<Ionicons name="md-map" size={20} color="white" />}
        variant="mapButton"
        onPress={() => navigation.navigate('Map')}
        textStyles={{ fontSize: 16 }}
      />
    </View>
  )
}
