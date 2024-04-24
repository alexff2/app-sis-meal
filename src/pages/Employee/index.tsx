import { useState, useEffect } from 'react'
import { CircleButton, TableSearch, Select } from '../../components'
import { ModalRegisterEmployee } from './Component'

type EmployeePropsSate = {
  id: string
  code: number
  name: string
  department: string
}

type DepartmentPropsSate = {
  id: string
  name: string
}

export function Employee(){
  const [ searchType, setSearchType ] = useState('department')
  const [ employee ] = useState<EmployeePropsSate[] | null>(null)
  const [ department, setDepartment ] = useState<DepartmentPropsSate[] | null>(null)

  useEffect(() => {
    setDepartment([
      { id: '1', name: 'Geral' },
      { id: '2', name: 'Produção' },
      { id: '3', name: 'Administrativo' },
    ])
  }, [])

  const handleOpenModalRegisterEmployee = () => {
    const element = document.getElementById('modalRegisterEmployeeId')

    element?.classList.add('open')
  }

  return(
    <div className='containerPages'>
      <TableSearch.Root>
        <TableSearch.Header title='Cadastro de funcionários'>
          <Select value={searchType} onChange={e => setSearchType(e.target.value)}>
            <option value='department' >Departamento</option>
            <option value='name'>Nome</option>
            <option value='code'>Código</option>
          </Select>

          <div className="search">
            { searchType === 'department'
              ? <Select>
                {
                  department?.map( value => (
                    <option key={value.id}>{value.name}</option>
                  ))
                }
              </Select>
              :<input type='text' placeholder='pesquisar...'/>}
          </div>

          <button className='buttonSearch'>Pesquisar</button>
        </TableSearch.Header>

        <TableSearch.Body>
          <TableSearch.Table headers={['Código', 'Nome', 'Departamento']}>
            {employee !== null && employee.map( row => (
              <tr key={row.id}>
                <td style={{width: '16%'}}>{row.code}</td>
                <td>{row.name}</td>
                <td style={{width: '26%'}}>{row.department}</td>
              </tr>
            ))}
          </TableSearch.Table>
        </TableSearch.Body>
      </TableSearch.Root>

      <CircleButton onClick={handleOpenModalRegisterEmployee}/>

      <ModalRegisterEmployee />
    </div>
  )
}
