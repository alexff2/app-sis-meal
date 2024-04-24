import { useState } from 'react'
import { CircleButton, TableSearch } from '../../components'
import { ModalRegisterDepartment } from './Components'

type DepartmentPropsSate = {
  id: string
  code: number
  name: string
}

export function Department() {
  const [ department ] = useState<DepartmentPropsSate[] | null>(null)

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
            {department !== null && department.map( row => (
              <tr key={row.id}>
                <td style={{width: '16%'}}>{row.code}</td>
                <td>{row.name}</td>
              </tr>
            ))}
          </TableSearch.Table>
        </TableSearch.Body>
      </TableSearch.Root>

      <CircleButton onClick={handleOpenModalRegisterDepartment}/>

      <ModalRegisterDepartment/>
    </div>
  )
}