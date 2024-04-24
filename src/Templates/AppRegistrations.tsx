import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import { Menu } from '../components/Menu'

export function AppRegistrations(){
  return(
    <>
      <Header/>
      <div className="appContainer">
        <Menu />
        <Outlet />
      </div>
    </>
  )
}