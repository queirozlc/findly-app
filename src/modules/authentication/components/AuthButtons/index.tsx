import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Image, View } from 'react-native'
import Button from '../../../../shared/components/Button'
import useAuthenticationContext from '../../hooks/useAuthenticationContext'
import { AuthStackParamList } from '../../routes/types'

interface AuthButtonsProps {
  view: 'sign-in' | 'sign-up'
}

export default function AuthButtons({ view }: AuthButtonsProps) {
  const navigation = useNavigation<AuthStackParamList>()
  const { loginWithGoogle } = useAuthenticationContext()

  async function handleGoogleSignIn() {
    try {
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View className="space-y-4">
      <View>
        <Button
          title={`${view === 'sign-in' ? 'Sign In' : 'Continue'} with Google`}
          icon={
            <Image
              source={require('../../../../../assets/google_icon_hd.png')}
              className="w-6 h-6 absolute -left-6"
            />
          }
          variant="oauthGoogle"
          onPress={handleGoogleSignIn}
        />
      </View>
      <View>
        <Button
          title={`${view === 'sign-in' ? 'Sign In' : 'Continue'} with Facebook`}
          icon={<FontAwesome5 name="facebook" size={24} color="white" />}
          variant="oauthFacebook"
        />
      </View>

      <View>
        <Button
          title={`${view === 'sign-in' ? 'Sign In' : 'Continue'} with Email`}
          icon={
            <MaterialCommunityIcons
              name="email"
              size={24}
              color="white"
              style={{ position: 'absolute', left: -32 }}
            />
          }
          variant="authEmail"
          onPress={() =>
            view === 'sign-in'
              ? navigation.navigate('UsernamePasswordSignIn')
              : navigation.navigate('UsernamePasswordSignUp')
          }
        />
      </View>
    </View>
  )
}
