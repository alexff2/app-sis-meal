import { useState } from 'react'
import { ModalRegister } from '../../../components'
import { api } from '../../../services'
import { AxiosError } from 'axios'
import { DepartmentPropsState } from '..'

type ModalRegisterDepartmentProps = {
  setDepartments: React.Dispatch<React.SetStateAction<DepartmentPropsState[] | []>>
}

export function ModalRegisterDepartment({ setDepartments }: ModalRegisterDepartmentProps) {
  const [name, setName] = useState('')

  const handleSubmit = async () => {
    try {
      const { data } = await api.post<DepartmentPropsState>('/department', { name })

      setDepartments( states => [...states, data])

      setName('')
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        if (error.response?.data.message === 'Unauthorized.') {
          alert('Sem autorização, login no sistema novamente!')
        }

        if (error.response?.data.message === 'Department already exists.') {
          alert('Já existe um departamento com esse nome!')
        }
      }
    }
  }

  return(
    <ModalRegister.Root id='modalRegisterDepartmentId'>
      <ModalRegister.Header
        title='Cadastro de Departamentos'
        id='modalRegisterDepartmentId'
      />

      <ModalRegister.Form onSubmit={handleSubmit} id='modalRegisterDepartmentId'>
        <input
          type='text'
          placeholder='Nome do departamento'
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <button type='submit'>Salvar</button>
      </ModalRegister.Form>
    </ModalRegister.Root>
  )
}