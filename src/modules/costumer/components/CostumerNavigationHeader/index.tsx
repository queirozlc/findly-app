import { useNavigation } from '@react-navigation/native'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { AppNavigationProps } from '../../../../shared/routes/app-route-type'

export default function CostumerNavigationHeader() {
  const navigation = useNavigation<AppNavigationProps>()

  return (
    <SafeAreaView className="bg-white items-center pt-10 px-6">
      <TouchableOpacity
        className="flex-row items-center h-16 px-6 rounded-full w-full max-w-sm justify-between bg-white"
        activeOpacity={0.9}
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 10,
        }}
        onPress={() => navigation.navigate('MapViewStack')}
      >
        <View>
          <Image
            source={require('../../../../../assets/search_icon.png')}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </View>
        <View>
          <Text className="text-sm font-poppins-medium">
            O que você procura ?
          </Text>
        </View>
        <TouchableOpacity
          className="p-2 border-2 border-lightest-gray-500 rounded-full active:bg-lightest-gray-500"
          activeOpacity={0.9}
        >
          <Image
            source={require('../../../../../assets/filter_icon.png')}
            style={{ resizeMode: 'contain' }}
            className="w-5 h-5"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
