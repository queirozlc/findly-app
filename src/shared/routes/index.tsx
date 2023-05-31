import { useRecoilValue } from 'recoil'
import AuthRoutes from '../../modules/authentication/routes'
import { isAuthenticated } from '../../modules/authentication/state/is-authenticated'
import AppRoutes from './app-route'

export default function Router() {
  const isAuth = useRecoilValue(isAuthenticated) // TODO: implement authentication

  return isAuth ? <AppRoutes /> : <AuthRoutes />
}
