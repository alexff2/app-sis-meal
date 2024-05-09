import { useState } from 'react'
import {
  Employee,
  Filters
} from './components'

export type EmployeeProps = {
  id: number
  name: string
  department: string
}

export function CodeReading(){
  const [employee, setEmployee] = useState<EmployeeProps | null>(null)

  return (
    <>
      <Employee employee={employee} />
      <Filters setEmployee={setEmployee}/>
    </>
  )
}