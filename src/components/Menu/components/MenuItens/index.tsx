import { Link } from 'react-router-dom'
import './style.css'
import { useAuthenticate } from '../../../../hooks'

export function MenuItens(){
  const { logout } = useAuthenticate()

  const handleCloseApp = () => {
    logout()
  }

  return (
    <div className='itensMenu'>
      <Link to='/'><div className='menuItem'>Home</div></Link>
      <Link to='/employee'><div className='menuItem'>Funcionários</div></Link>
      <Link to='/department'><div className='menuItem'>Departamentos</div></Link>
      {/* <Link to='report'><div className='menuItem'>Relatórios</div></Link> */}
      <Link to='user'><div className='menuItem'>Usuários</div></Link>
      <div className='menuItem' onClick={handleCloseApp}>Sair</div>
    </div>
  )
}