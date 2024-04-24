import { AuthProvider } from './AuthenticateContext'
import { WindowSizeProvider } from './WindowSizeContext'

type ContextProps = {
  children: React.ReactNode
}

export default function Context({ children }: ContextProps){
  return (
    <WindowSizeProvider>
      <AuthProvider>
        { children }
      </AuthProvider>
    </WindowSizeProvider>
  )
}