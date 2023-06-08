import AuthRoutes from '../../modules/authentication/routes'
import AppRoutes from './app-route'
import { useAuth } from '../../modules/authentication/hooks/useAuth'

export default function Router() {
  const { isLogged } = useAuth()

  return isLogged ? <AppRoutes /> : <AuthRoutes />
}
