import { useContext } from 'react'
import { WindowSizeContext } from '../contexts/WindowSizeContext'

export function useWindowSize(){
  const propsContext = useContext(WindowSizeContext)

  return propsContext
}