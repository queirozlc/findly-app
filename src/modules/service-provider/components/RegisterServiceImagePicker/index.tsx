import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function RegisterServiceImagePicker() {
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        alert('Desculpe, precisamos de permissões de câmera para fazer isso!')
      }
    })()
  }, [image])

  const pickImage = async () => {
    const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [16, 9],
    })

    if (!canceled) {
      setImage(assets[0].uri)
      const fileName = assets[0].uri.substring(
        assets[0].uri.lastIndexOf('/') + 1,
        assets[0].uri.length,
      )
      const extend = fileName.split('.')[1]
      const formData = new FormData()
      formData.append(
        'file',
        JSON.parse(
          JSON.stringify({
            name: fileName,
            uri: assets[0].uri,
            type: `image/${extend}`,
          }),
        ),
      )

      console.log(fileName, extend, formData)
    }
  }

  return (
    <View className={'items-center pt-10 space-y-2'}>
      <TouchableOpacity
        className={
          'w-24 h-24 bg-lightest-gray-500 rounded-full flex items-center justify-center'
        }
        onPress={pickImage}
      >
        {/*
            Camera icon
          */}
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width: 120, height: 120 }}
            className="rounded-2xl"
          />
        ) : (
          <MaterialCommunityIcons
            name="camera-plus-outline"
            size={44}
            color="black"
          />
        )}
      </TouchableOpacity>

      <Text className={'text-xl font-inter-medium text-zinc-800'}>
        {!image && 'Selecione uma imagem'}
      </Text>
    </View>
  )
}
