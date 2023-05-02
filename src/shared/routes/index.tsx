import AuthRoutes from '../../modules/authentication/routes'
import AppRoutes from './app-route'

export default function Router() {
  const isAuthenticated = false // TODO: implement authentication

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />
}
