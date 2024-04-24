import { ComponentProps } from 'react'
import './style.css'

type OverLowProps = ComponentProps<'div'>

export function OverLow({ children, ...props }: OverLowProps) {
  return(
    <div className='over-low' {...props}>
      {children}
    </div>
  )
}