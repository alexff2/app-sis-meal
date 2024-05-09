import { useState, useEffect } from 'react'
import { CircleButton, TableSearch, Select } from '../../components'
import { ModalRegisterEmployee } from './Component'
import { api } from '../../services'

type EmployeePropsSate = {
  id: number
  name: string
  departmentId: number
}

export type DepartmentPropsSate = {
  id: number
  name: string
}

export function Employee(){
  const [ searchType, setSearchType ] = useState('department')
  const [ search, setSearch ] = useState('')
  const [ employees, setEmployees ] = useState<EmployeePropsSate[]>([])
  const [ departments, setDepartments ] = useState<DepartmentPropsSate[]>([])

  useEffect(() => {
    api.get('/department').then(({ data }) => setDepartments(data))
  }, [])

  const handleChangeTypeSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value)
  }

  const searchEmployee = async () => {
    if (search==='') {
      alert('Digite algo na pesquisa!')
      return
    }

    try {
      const { data } = await api.get<EmployeePropsSate[]>('employee', {
        params: {
          type: searchType,
          search
        }
      })
  
      setEmployees(data)

      if (data.length === 0) {
        alert('Nenhum funcionário encontrado!')
      }
    } catch (error) {
      console.log(error)
      alert('Error, entre em contato com ADM!')
    }
  }

  const handleOpenModalRegisterEmployee = () => {
    const element = document.getElementById('modalRegisterEmployeeId')

    element?.classList.add('open')
  }

  return(
    <div className='containerPages'>
      <TableSearch.Root>
        <TableSearch.Header title='Cadastro de funcionários'>
          <Select value={searchType} onChange={handleChangeTypeSearch}>
            <option value='department' >Departamento</option>
            <option value='name'>Nome</option>
            <option value='code'>Código</option>
          </Select>

          <div className="search">
            { searchType === 'department'
              ? <Select
                  onChange={e => setSearch(e.target.value)}
                >
                  <option value=''>Selecione um departamento</option>
                  {
                    departments?.map( value => (
                      <option
                        key={value.id}
                        value={value.id}
                      >{value.name}</option>
                    ))
                  }
                </Select>
              : <input
                  type={searchType === 'code' ? 'number': 'text'}
                  placeholder='pesquisar...'
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && searchEmployee()}
                />
            }
          </div>

          <button className='buttonSearch' onClick={searchEmployee}>Pesquisar</button>
        </TableSearch.Header>

        <TableSearch.Body>
          <TableSearch.Table headers={['Código', 'Nome', 'Departamento']}>
            {employees.length > 0 && employees.map( row => (
              <tr key={row.id}>
                <td style={{width: '16%'}}>{row.id}</td>
                <td>{row.name}</td>
                <td style={{width: '26%'}}>
                  {departments.find(dep => dep.id === row.departmentId)?.name}
                </td>
              </tr>
            ))}
          </TableSearch.Table>
        </TableSearch.Body>
      </TableSearch.Root>

      <CircleButton onClick={handleOpenModalRegisterEmployee}/>

      <ModalRegisterEmployee departments={departments}/>
    </div>
  )
}
