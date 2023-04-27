import AuthRoutes from '../modules/authentication/routes'
import AppRoutes from './app-route'

export default function Router() {
  const isAuthenticated = false

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />
}
