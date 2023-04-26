import { Image, ImageBackground, View } from 'react-native'

export default function AuthBanner() {
  return (
    <View>
      <ImageBackground
        source={require('../../../../../assets/auth_thumbnail.png')}
        className="w-full h-80 items-center justify-center"
      >
        <Image
          source={require('../../../../../assets/logo_dark2.png')}
          style={{ resizeMode: 'cover' }}
          className="w-64 h-64"
        />
      </ImageBackground>
    </View>
  )
}
