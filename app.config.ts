import { ConfigContext, ExpoConfig } from '@expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Findly',
  slug: 'findly-app',
  scheme: 'findly-app',
  version: '1.0.0',
  splash: {
    image: './assets/logo.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  orientation: 'portrait',
  icon: './assets/icon.png',
  assetBundlePatterns: ['**/*'],
  ios: {
    splash: {
      image: './assets/logo.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    supportsTablet: true,
    bundleIdentifier: 'com.findly.app',
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
    infoPlist: {
      UIBackgroundModes: ['location', 'fetch'],
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.findly.app',
    config: {
      googleMaps: {
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    },
    permissions: [
      'ACCESS_BACKGROUND_LOCATION',
      'ACCESS_COARSE_LOCATION',
      'ACCESS_FINE_LOCATION',
      'FOREGROUND_SERVICE',
    ],
    splash: {
      backgroundColor: '#ffffff',
      resizeMode: 'contain',
      image: './assets/logo_splash.png',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
})
