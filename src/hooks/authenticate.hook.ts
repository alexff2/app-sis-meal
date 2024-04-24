import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthenticateContext'

export function useAuthenticate(){
  const propsContext = useContext(AuthContext)

  return propsContext
}