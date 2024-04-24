import { useState, createContext } from 'react'

import { api } from '../../services'
import { validateFields } from '../../validations/fields'

type UserAuthenticateProps = {
  name: string
  app: 'register' | 'codeReading'
  token: string
}

type LoginProps = {
  userName: string
  password: string
  app: 'register' | 'codeReading'
}

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthContextProps = {
  userAuthenticate: UserAuthenticateProps | null
  login: ({ userName, password }: LoginProps) => void
  logout: () => void
}


export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps){
  const [userAuthenticate, setUserAuthenticate] = useState<UserAuthenticateProps | null>(null)

  const login = async ({ userName, password, app }: LoginProps) => {
    if (validateFields([password, userName])) {
      const { data } = await api.post('/authenticated', {
        userName,
        password,
      })

      const { token } = data

      api.defaults.headers.common.Authorization = token

      setUserAuthenticate({
        name: userName,
        token,
        app
      })
    } else {
      alert('Preencha todos os campos corretamente.')
    }
  }

  const logout = () => {
    setUserAuthenticate(null)
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
