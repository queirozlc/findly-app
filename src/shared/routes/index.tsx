import AuthRoutes from '../../modules/authentication/routes'
import { useAuth } from '../../modules/authentication/hooks/useAuth'
import AppRoutes from './app-route'

export default function Router() {
  const { isLogged } = useAuth()

  return isLogged ? <AppRoutes /> : <AuthRoutes />
}
