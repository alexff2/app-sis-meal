import { useEffect, useState } from 'react'
import './style.css'
import { EmployeeProps } from '../..'
import { api } from '../../../../services'
import { AxiosError } from 'axios'

interface Props {
  setEmployee: React.Dispatch<React.SetStateAction<EmployeeProps | null>>
}

export function Filters({ setEmployee }: Props){
  const [employeeId, setEmployeeId] = useState('')

  useEffect(() => {
    document.getElementById('empId')?.focus()
  }, [])

  const handleReadingCode = async () => {
    try {
      const { data } = await api.post('meal', {
        employeeId: Number(employeeId)
      })
  
      setEmployee(data)
      setEmployeeId('')
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        if (error.response?.data.message === 'Employee Not Found.') {
          alert('Funcionário não encontrado!')
          return
        }

        if (error.response?.data.message === 'Already Meal.') {
          alert('Já foi gerado registro de almoço desse funcionário na data atual!')
          return
        }

        if (error.response?.data.message === 'Employee Inactive!') {
          alert('Este funcionário está inativo!')
          return
        }
      }

      alert('Error, entre em contato com Administrador!')
    }
  }

  return(
    <div className="alignCenter filterContainer">
      <div>
        <input
          type="text"
          id='empId'
          placeholder="Código do funcionário"
          value={employeeId}
          onChange={e => setEmployeeId(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleReadingCode()}
        />

        <button
          type="button"
          onClick={handleReadingCode}
        >Ler</button>
      </div>
    </div>
  )
}