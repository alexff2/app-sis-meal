import { useState, createContext, useEffect } from 'react'

import { api } from '../../services'
import { validateFields } from '../../validations/fields'
import { AxiosError } from 'axios'

type UserAuthenticateProps = {
  name: string
  app: 'register' | 'codeReading'
  token: string
}

type LoginProps = {
  email: string
  password: string
  app: 'register' | 'codeReading'
}

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthContextProps = {
  userAuthenticate: UserAuthenticateProps | null
  login: ({ email, password }: LoginProps) => void
  logout: () => void
}

const AUTH_MEAL = "@meal-auth"
const setAuthStorage = (authStorage: UserAuthenticateProps) => 
  localStorage.setItem(AUTH_MEAL, JSON.stringify(authStorage))

const getAuthStorage = () => 
  JSON.parse(localStorage.getItem(AUTH_MEAL) || '""')

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps){
  const [userAuthenticate, setUserAuthenticate] = useState<UserAuthenticateProps | null>(null)

  useEffect(() => {
    const auth = getAuthStorage()

    if (import.meta.env.VITE_ENV === 'dev' && auth) {

      api.defaults.headers.common.Authorization = `Bearer ${auth.token}`

      setUserAuthenticate(auth)
    }
  }, [])

  const login = async ({ email, password, app }: LoginProps) => {
    try {
      if (validateFields([password, email])) {
        const { data } = await api.post('/sessions', {
          email,
          password,
        })
  
        const { token, user } = data
  
        api.defaults.headers.common.Authorization = `Bearer ${token}`
  
        setUserAuthenticate({
          name: user.name,
          token,
          app
        })

        setAuthStorage({
          name: user.name,
          token,
          app
        })
      } else {
        alert('Preencha todos os campos corretamente.')
      }
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        alert('Credenciais inválidas!')
      }
    }
  }

  const logout = () => {
    setUserAuthenticate(null)
    localStorage.clear()
  }

  return(
    <AuthContext.Provider value={{
      userAuthenticate,
      login,
      logout
    }}>
      { children }
    </AuthContext.Provider>
  )
}
