import AuthRoutes from '../../modules/authentication/routes'
import AppRoutes from './app-route'

export default function Router() {
  const isAuthenticated = true // TODO: implement authentication

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />
}
