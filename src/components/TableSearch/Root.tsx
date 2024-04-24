type RegisterProps = {
  children: React.ReactNode
}

import './style.css'

export function Root({ children }: RegisterProps){
  return (
    <div className='tableSearch'>
      {children}
    </div>
  )
}
