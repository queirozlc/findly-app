import { View } from 'react-native'
import AuthBanner from '../../components/AuthBanner'
import ShadowBoxCard from '../../../../shared/components/ShadowBoxCard'
import TextTitle from '../../../../shared/components/TextTitle'
import Button from '../../../../shared/components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthStackParamList } from '../../routes/types'

export default function VerificationCompleteScreen() {
  const navigation = useNavigation<AuthStackParamList>()

  return (
    <View className="flex-1 bg-white space-y-10">
      <View>
        <AuthBanner />
      </View>

      <View>
        <ShadowBoxCard>
          <View className="space-y-4">
            <View>
              <TextTitle>
                Your account has been verified successfully, you can now login
                to your account.
              </TextTitle>
            </View>

            <View>
              <Button
                title={'Continue to Login'}
                variant={'orderNotification'}
                onPress={() => navigation.replace('UsernamePasswordSignIn')}
              />
            </View>
          </View>
        </ShadowBoxCard>
      </View>
    </View>
  )
}
