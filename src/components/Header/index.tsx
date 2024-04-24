import { useAuthenticate } from '../../hooks'

import './style.css'

export function Header(){
  const { userAuthenticate, logout } = useAuthenticate()

  const handleOpenMenu = () => {
    const element = document.getElementById('looseMenuId')

    element?.classList.add('open')
  }

  const handleCloseApp = () => {
    logout()
  }

  return(
    <header className='headerContainer'>
      {userAuthenticate?.app === 'register' && <div className='menuBtn' onClick={handleOpenMenu}>Menu</div>}
      <h1>SisMeal</h1>

      <div className="user">
        <span>Seja bem vindo(a), <strong>{userAuthenticate?.name}</strong></span>
        <div onClick={handleCloseApp}></div>
      </div>
    </header>
  )
}
