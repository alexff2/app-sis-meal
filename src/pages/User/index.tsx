import { useState } from 'react'
import { CircleButton, TableSearch } from '../../components'
import { ModalRegisterUser } from './Components'

type UserPropsSate = {
  id: string
  name: string
  email: string
}

export function User() {
  const [ user ] = useState<UserPropsSate[] | null>(null)

  const handleOpenModalRegisterUser = () => {
    const element = document.getElementById('modalRegisterUserId')

    element?.classList.add('open')
  }

  return (
    <div className='containerPages'>
      <TableSearch.Root>
        <TableSearch.Header title='Usuários'>
          <div className='search'>
            <input type='text' />
          </div>

          <button className='buttonSearch'>Pesquisar</button>
        </TableSearch.Header>

        <TableSearch.Body>
          <TableSearch.Table headers={['Código', 'Nome', 'Email']}>
            {user !== null && user.map( row => (
              <tr key={row.id}>
                <td style={{width: '16%'}}>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
              </tr>
            ))}
          </TableSearch.Table>
        </TableSearch.Body>
      </TableSearch.Root>

      <CircleButton onClick={handleOpenModalRegisterUser}/>

      <ModalRegisterUser/>
    </div>
  )
}