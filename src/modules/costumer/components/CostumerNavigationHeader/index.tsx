import { useNavigation } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { AppNavigationProps } from '../../../../shared/routes/app-route-type'

const filterIcon = require('../../../../../assets/filter_icon.png')

export default function CostumerNavigationHeader() {
  const navigation = useNavigation<AppNavigationProps>()

  return (
    <View className="bg-white items-center py-5 px-7 ">
      <TouchableOpacity
        className="flex-row items-center h-16 px-6 rounded-full justify-between w-full bg-white"
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
          <Text className="text-sm font-poppins-medium">What do you need?</Text>
        </View>
        <TouchableOpacity
          className="p-2 border-2 border-lightest-gray-500 rounded-full active:bg-lightest-gray-500"
          activeOpacity={0.9}
        >
          <Image
            source={filterIcon}
            style={{ resizeMode: 'contain' }}
            className="w-5 h-5"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}
