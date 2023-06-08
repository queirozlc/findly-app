import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Image, View } from 'react-native'
import Button from '../../../../shared/components/Button'
import { AuthStackParamList } from '../../routes/types'
interface AuthButtonsProps {
  view: 'sign-in' | 'sign-up'
}

export default function AuthButtons({ view }: AuthButtonsProps) {
  const navigation = useNavigation<AuthStackParamList>()

  async function handleGoogleSignIn() {
    // send the response to the backend server to make a call to google and get the user info
    // if the user exists in the database, then return the user info from the db
    // if the user does not exist in the database, then create a new user in the database
    // and return the user info from the db
    // then set the user in the authentication context
    // then navigate to the home screen
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
