import { useState } from 'react'
import { Select, ModalRegister } from '../../../components'
import { DepartmentPropsSate } from '../index'
import { api } from '../../../services'
import { AxiosError } from 'axios'

type ModalRegisterEmployeeProps = {
  departments: DepartmentPropsSate[] | []
}

export function ModalRegisterEmployee({ departments }: ModalRegisterEmployeeProps){
  const [employee, setEmployee] = useState('')
  const [departmentId, setDepartmentId] = useState('1')

  const handleSubmit = async () => {
    try {
      await api.post('employee', {
        name: employee,
        departmentId: Number(departmentId)
      })

      setEmployee('')
      setDepartmentId('1')

      alert('Funcionário cadastrado com sucesso!')
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        if (error.response?.data.message === 'Employee already exists.') {
          alert('Funcionário já cadastro no sistema!')
        }

        if (error.response?.data.message === 'Department Not Found.') {
          alert('Departamento não existe no sistema, entre em contato com ADM!')
        }
      } else {
        alert('Erro no aplicativo, entre em contato com administrador!')
      }
    }
  }

  return(
    <ModalRegister.Root id='modalRegisterEmployeeId'>
      <ModalRegister.Header
        title='Cadastro de funcionários'
        id='modalRegisterEmployeeId'
      />

      <ModalRegister.Form onSubmit={handleSubmit} id='modalRegisterEmployeeId'>
        <input
          type='text'
          placeholder='Nome do funcionário'
          value={employee}
          onChange={e => setEmployee(e.target.value)}
        />

        <Select onChange={e =>setDepartmentId(e.target.value)} value={departmentId}>
          {
            departments.map( department => (
              <option
                key={department.id}
                value={department.id}
              >{department.name}</option>
            ))
          }
        </Select>

        <button type='submit'>Salvar</button>
      </ModalRegister.Form>
    </ModalRegister.Root>
  )
}
