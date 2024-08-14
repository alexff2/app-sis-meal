import { useState } from 'react'

export function useEmployee() {
  const [employees, setEmployees] = useState()

  const findByDepartment = () => {}

  return {
    employees,
    findByDepartment,
    setEmployees
  }
}