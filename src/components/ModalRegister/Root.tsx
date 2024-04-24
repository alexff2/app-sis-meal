type RegisterProps = {
  children: React.ReactNode
  id: string
}

import './style.css'

export function Root({ children, id }: RegisterProps){
  return (
    <div className='over-low overLowRegisterModal' id={id}>
      <div className='registerModalContainer'>
        {children}
      </div>
    </div>
  )
}
