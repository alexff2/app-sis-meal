import { Outlet } from 'react-router-dom'
import { Header } from '../components'

export function AppCodeReading(){
  return(
    <>
      <Header/>
      <Outlet />
    </>
  )
}