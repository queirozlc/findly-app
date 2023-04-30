import { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { useSetRecoilState } from 'recoil'
import colors from 'tailwindcss/colors'
import { serviceProviderDetailState } from '../../../../shared/utils/state/atoms/service-provider-detail'
import { ServiceProviderData } from '../../utils/view-model/abstract-service-provider-presenter'

interface HttpClient {
  get: (url: string) => Promise<ServiceProviderData>
}

export default function MapViewSearchInput() {
  const setServiceProviderData = useSetRecoilState(serviceProviderDetailState)

  const fakeHttpClient: HttpClient = {
    get: async (url: string) => ({
      id: '1',
      name: 'John Doe',
      averageRating: 4.5,
      phoneNumber: '09123456789',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      // Picture 1024x1024
      thumbnail: 'https://picsum.photos/1024/1024',
    }),
  }
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (searchQuery) {
      fakeHttpClient
        .get(`https://api.example.com/search?q=${searchQuery}`)
        .then((response) => {
          setServiceProviderData(response)
        })
    } else {
      setServiceProviderData(null)
    }
  }, [searchQuery])

  return (
    <View className="space-y-3">
      <Text className="font-inter-medium text-base text-dark-gray-500">
        Search for a service provider
      </Text>
      <TextInput
        className="w-full h-12 border border-dark-gray-500 font-inter-medium text-base px-5 rounded-lg"
        placeholder="Ex: Plumber, Electrician, etc."
        cursorColor={colors.zinc[400]}
        onChangeText={(text) => setSearchQuery(text)}
      />
    </View>
  )
}
