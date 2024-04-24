import { OverLow } from '../../../OverLow'
import { MenuItens } from '../MenuItens'

import './style.css'

export function LooseMenu(){
  const handleCloseMenu = () => {
    const element = document.getElementById('looseMenuId')

    element?.classList.remove('open')
  }

  return (
    <OverLow id='looseMenuId' onClick={handleCloseMenu}>
      <div className="containerLooseMenu">
        <header>Menu</header>
        <MenuItens />
      </div>
    </OverLow>
  )
}