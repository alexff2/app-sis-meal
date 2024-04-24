import {
  LooseMenu,
  FixedMenu
} from './components'
import { useWindowSize } from '../../hooks';


export function Menu(){
  const { widthWindow } = useWindowSize()

  return widthWindow >= 900 
    ? <FixedMenu /> 
    : <LooseMenu />
}