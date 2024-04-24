import { BrowserRouter } from 'react-router-dom'

import { useAuthenticate } from '../hooks'

import { PrivateRoutes } from './private.routes'
import { PublicRoutes } from './public.routes'

export default function Routes() {
  const { userAuthenticate } = useAuthenticate()

  return (
    <BrowserRouter>

      {userAuthenticate ? <PrivateRoutes/> : <PublicRoutes />}

    </BrowserRouter>
  )
}
