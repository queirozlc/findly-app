import AppRoutes from './app-route'
import AuthRoutes from './auth-route'

export default function Router() {
  const isAuthenticated = false

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />
}
