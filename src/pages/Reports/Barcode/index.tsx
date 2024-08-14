import { useEffect, useState } from 'react'
import BarcodeComponent from 'react-barcode'

import { Select, TableSearch } from '../../../components'

import './style.css'
import { api } from '../../../services'
import { DepartmentPropsSate, EmployeePropsSate } from '../../Employee'

export function Barcode(){
  const [ searchType, setSearchType ] = useState('department')
  const [ search, setSearch ] = useState('')
  const [employees, setEmployees] = useState<EmployeePropsSate[]>([])
  const [ departments, setDepartments ] = useState<DepartmentPropsSate[]>([])

  const handleChangeTypeSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value)
    setSearch('')
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

  useEffect(() => {
    api.get('/department').then(({ data }) => setDepartments(data))
  }, [])

  return (
    <div className='containerPages'>
      <div className='headerPrint'>
        <button className='printEmployee' onClick={() => window.print()}>Imprimir</button>
        <TableSearch.Root>
          <TableSearch.Header title='Cadastro de funcionários'>
            <Select value={searchType} onChange={handleChangeTypeSearch}>
              <option value='department' >Departamento</option>
              <option value='name'>Nome</option>
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
        </TableSearch.Root>
      </div>
      <div className='barcode'>
        {
          employees.map(item => (
            <div key={item.id} className='barcodeContainer'>
              <span>{item.name}</span>
              <BarcodeComponent value={String(item.id)} fontSize={12} margin={2}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
