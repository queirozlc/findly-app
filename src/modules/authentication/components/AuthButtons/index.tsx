import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { Image, View } from 'react-native'
import Button from '../../../../shared/components/Button'

interface AuthButtonsProps {
  view: 'sign-in' | 'sign-up'
}

export default function AuthButtons({ view }: AuthButtonsProps) {
  return (
    <View className="space-y-4">
      <View>
        <Button
          title={`${view !== 'sign-in' ? 'Sign In' : 'Continue'} with Google`}
          icon={
            <Image
              source={require('../../../../../assets/google_icon_hd.png')}
              className="w-6 h-6 absolute -left-6"
            />
          }
          variant="oauthGoogle"
        />
      </View>
      <View>
        <Button
          title={`${view !== 'sign-in' ? 'Sign In' : 'Continue'} with Facebook`}
          icon={<FontAwesome5 name="facebook" size={24} color="white" />}
          variant="oauthFacebook"
        />
      </View>

      <View>
        <Button
          title={`${view !== 'sign-in' ? 'Sign In' : 'Continue'} with Email`}
          icon={
            <MaterialCommunityIcons
              name="email"
              size={24}
              color="white"
              style={{ position: 'absolute', left: -32 }}
            />
          }
          variant="authEmail"
        />
      </View>
    </View>
  )
}
