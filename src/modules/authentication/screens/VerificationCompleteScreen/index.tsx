import { Text, View } from 'react-native'
import AuthBanner from '../../components/AuthBanner'
import ShadowBoxCard from '../../../../shared/components/ShadowBoxCard'
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
              <Text className={'font-poppins-black text-xl text-dark-gray-500'}>
                Your account has been verified successfully, you can now login
                to your account.
              </Text>
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
