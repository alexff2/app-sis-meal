import { createContext, useEffect, useState } from 'react'

type WindowSizeProps = {
  widthWindow: number
  size: 'small' | 'medium' | 'big'
}

export const WindowSizeContext = createContext({} as WindowSizeProps)

type WindowSizeProviderProps = {
  children: React.ReactNode
}

export function WindowSizeProvider({ children }: WindowSizeProviderProps){
  const [widthWindow, setWidthWindow] = useState(window.innerWidth)

  useEffect(() => {
    const handleSize = () => {
      setWidthWindow(window.innerWidth)
    }

    window.addEventListener('resize', handleSize)

    return () => window.removeEventListener('resize', handleSize)
  }, [])

  const handleSizeWindow = () => {
    if(widthWindow <= 600){
      return 'small'
    }

    if (widthWindow > 600 && widthWindow <= 1200) {
      return 'medium'
    }

    return 'big'
  }

  return(
    <WindowSizeContext.Provider value={{
      widthWindow,
      size: handleSizeWindow()
    }}>
      {children}
    </WindowSizeContext.Provider>
  )
}
