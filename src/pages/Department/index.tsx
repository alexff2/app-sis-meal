import { useEffect, useState } from 'react'
import { CircleButton, TableSearch } from '../../components'
import { ModalRegisterDepartment } from './Components'
import { api } from '../../services'

export type DepartmentPropsState = {
  id: number
  name: string
}

export function Department() {
  const [ departments, setDepartments ] = useState<DepartmentPropsState[] | []>([])

  useEffect(() => {
    api.get('/department').then(({ data }) => setDepartments(data))
  }, [])

  const handleOpenModalRegisterDepartment = () => {
    const element = document.getElementById('modalRegisterDepartmentId')

    element?.classList.add('open')
  }

  return (
    <div className='containerPages'>
      <TableSearch.Root>
        <TableSearch.Header title='Departamentos'>
          <div className='search'>
            <input type='text' />
          </div>

          <button className='buttonSearch'>Pesquisar</button>
        </TableSearch.Header>

        <TableSearch.Body>
          <TableSearch.Table headers={['Código', 'Nome']}>
            {departments.length > 0 && departments.map( row => (
              <tr key={row.id}>
                <td style={{width: '16%'}}>{row.id}</td>
                <td>{row.name}</td>
              </tr>
            ))}
          </TableSearch.Table>
        </TableSearch.Body>
      </TableSearch.Root>

      <CircleButton onClick={handleOpenModalRegisterDepartment}/>

      <ModalRegisterDepartment setDepartments={setDepartments}/>
    </div>
  )
}