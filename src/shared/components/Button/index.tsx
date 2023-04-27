import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'
import { variants } from './variants'

interface ButtonProps {
  onPress?: () => void
  title: string
  isLoading?: boolean
  icon?: React.ReactNode
  disabled?: boolean
  variant: 'outline' | 'solid' | 'oauthGoogle' | 'oauthFacebook' | 'authEmail'
  styles?: TouchableOpacityProps['style']
  textStyles?: TextProps['style']
}

export default function Button({
  onPress,
  title,
  isLoading = false,
  icon,
  disabled = false,
  variant = 'solid',
  styles,
  textStyles,
}: ButtonProps) {
  const buttonVariant = variants[variant]
  const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled

  return (
    <TouchableOpacity
      className={`h-14 w-full items-center justify-center ${buttonStyle.button.props}`}
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isLoading || disabled}
      style={styles}
    >
      {isLoading ? (
        <ActivityIndicator
          className="absolute"
          color={buttonStyle.loading?.props || '#fff'}
          size="small"
        />
      ) : (
        <View
          className={`flex-row flex-1 items-center justify-center space-x-2`}
        >
          {icon}
          <Text
            className={`text-lg ${buttonStyle.title.props}`}
            style={textStyles}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
