import { Image, ImageBackground, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthStackParamList } from '../../routes/types'

export default function AuthBanner() {
  const navigation = useNavigation<AuthStackParamList>()

  return (
    <View>
      <ImageBackground
        source={require('../../../../../assets/ellipse_yellow.png')}
        className="w-full h-80 items-center justify-center relative"
      >
        <Image
          source={require('../../../../../assets/logo_bg.png')}
          style={{ resizeMode: 'cover' }}
          className="w-96 h-96 relative"
        />
      </ImageBackground>
    </View>
  )
}
