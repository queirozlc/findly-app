import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Dimensions, View } from 'react-native'
import Button from '../../../../shared/components/Button'
import { AppNavigationProps } from '../../../../shared/routes/app-route-type'

export default function MapButton() {
  const deviceWidth = Dimensions.get('window').width
  const navigation = useNavigation<AppNavigationProps>()

  return (
    <View
      className="absolute"
      style={{
        left: deviceWidth / 2 - 50,
        bottom: 20,
      }}
    >
      <Button
        title="Mapa"
        icon={<Ionicons name="md-map" size={20} color="white" />}
        variant="mapButton"
        textStyles={{ fontSize: 16 }}
        onPress={() => navigation.navigate('ServiceProviderMapStack')}
        styles={{
          width: 100,
          height: 40,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      />
    </View>
  )
}
