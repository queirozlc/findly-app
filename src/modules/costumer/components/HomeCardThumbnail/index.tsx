import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { ServiceProviderData } from '../../utils/view-model/abstract-service-provider-presenter'

interface HomeCardProps {
  data: ServiceProviderData
}

export default function HomeCardThumbnail({ data }: HomeCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <View className="relative flex-1">
      <Image
        source={data.thumbnail}
        style={{
          resizeMode: 'stretch',
          height: 300,
        }}
        className="w-full rounded-3xl flex-1"
      />
      <TouchableOpacity
        className="absolute right-4 top-4 bg-transparent"
        onPress={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? (
          <MaterialIcons name="favorite" size={30} color={colors.yellow[500]} />
        ) : (
          <MaterialIcons
            name="favorite-outline"
            size={30}
            color={colors.zinc['400']}
          />
        )}
      </TouchableOpacity>
    </View>
  )
}
