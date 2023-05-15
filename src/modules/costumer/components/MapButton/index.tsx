import { Ionicons } from '@expo/vector-icons'
import { Dimensions, View } from 'react-native'
import { useRecoilState } from 'recoil'
import Button from '../../../../shared/components/Button'
import { mapState } from '../../../../shared/utils/state/atoms/map-state'

export default function MapButton() {
  const deviceWidth = Dimensions.get('window').width
  const [mapStateValue, setMapState] = useRecoilState(mapState)

  function handleMapView() {
    setMapState(true)
  }

  return (
    <>
      {!mapStateValue && (
        <View
          className="absolute"
          style={{
            zIndex: 10,
            left: deviceWidth / 2 - 50,
            bottom: 10,
          }}
        >
          <Button
            title="Map"
            icon={<Ionicons name="md-map" size={20} color="white" />}
            variant="mapButton"
            textStyles={{ fontSize: 16 }}
            onPress={handleMapView}
            styles={{
              width: 100,
              height: 40,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          />
        </View>
      )}
    </>
  )
}
