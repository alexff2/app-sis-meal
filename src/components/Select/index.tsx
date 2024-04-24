import { CgArrowsVAlt } from 'react-icons/cg'
import { ComponentProps } from 'react'
import './style.css'

type SelectProps = ComponentProps<'select'>

export function Select({ children, ...props }: SelectProps){
  return(
    <div className='selectContainer'>
      <select {...props}>{children}</select>
      <div className='iconArrowSelect'>
        <CgArrowsVAlt size={16}/>
      </div>
    </div>
  )
}