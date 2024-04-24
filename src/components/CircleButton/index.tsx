import { ComponentProps } from 'react'
import { GrAdd } from 'react-icons/gr'

import { useWindowSize } from '../../hooks'

import './style.css'

interface CircleButtonProps extends ComponentProps<'button'> {
  size?: 'small' | 'medium' | 'big'
}

export function CircleButton({ children, size, ...props}: CircleButtonProps){
  const { size: sizeWidth } = useWindowSize()

  return(
    <button className={`circleButton ${size ? size: sizeWidth}`} {...props}>{children ? children : <GrAdd />}</button>
  )
}
