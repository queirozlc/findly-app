import { Image, ImageBackground, View } from 'react-native'

export default function AuthBanner() {
  return (
    <View>
      <ImageBackground
        source={require('../../../../../assets/ellipse_yellow.png')}
        className="w-full h-80 items-center justify-center"
      >
        <Image
          source={require('../../../../../assets/logo_bg.png')}
          style={{ resizeMode: 'cover' }}
          className="w-96 h-96"
        />
      </ImageBackground>
    </View>
  )
}
