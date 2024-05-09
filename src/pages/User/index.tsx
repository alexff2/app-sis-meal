import { useEffect, useState } from 'react'
import { CircleButton, TableSearch } from '../../components'
import { ModalRegisterUser } from './Components'
import { api } from '../../services'

export type UserPropsSate = {
  id: string
  name: string
  email: string
}

export function User() {
  const [ search, setSearch ] = useState('')
  const [ users, setUsers ] = useState<UserPropsSate[]>([])

  useEffect(() => {
    api.get('user')
      .then(({ data }) => setUsers(data))
  }, [])

  const handleOpenModalRegisterUser = () => {
    const element = document.getElementById('modalRegisterUserId')

    element?.classList.add('open')
  }

  const userFilter = users.filter(user => user.name.includes(search))

  return (
    <div className='containerPages'>
      <TableSearch.Root>
        <TableSearch.Header title='Usuários'>
          <div className='search'>
            <input
              type='text'
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder='Pesquisar por nome'
            />
          </div>
        </TableSearch.Header>

        <TableSearch.Body>
          <TableSearch.Table headers={['Nome', 'Email']}>
            {userFilter.map( user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </TableSearch.Table>
        </TableSearch.Body>
      </TableSearch.Root>

      <CircleButton onClick={handleOpenModalRegisterUser}/>

      <ModalRegisterUser setUsers={setUsers}/>
    </div>
  )
}