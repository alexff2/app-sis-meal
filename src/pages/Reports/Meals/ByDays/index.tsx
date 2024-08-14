import { useEffect, useState } from 'react'
import { Backdrop, Select } from '../../../../components'
import './style.css'
import { DepartmentPropsSate } from '../../../Employee'
import { api } from '../../../../services'
import { getNowYMD, getMonthsDescriptions, getYearValid } from '../../../../utils/dates'
import { AxiosError } from 'axios'

type DepartmentQuantity = {
  name: string
  quantity: number
}

type MealsByDay = {
  date: string
  day: string
  quantityTotal: number
  valueUnit: string 
  valueTotal: number
  quantityByDepartment: DepartmentQuantity[]
}

const { month, year } = getNowYMD()
const months = getMonthsDescriptions()
const years = getYearValid()

export function ByDays() {
  const [ load, setLoad ] = useState(false)
  const [ departments, setDepartments ] = useState<DepartmentPropsSate[]>([])
  const [ monthToSend, setMonthToSend ] = useState(month)
  const [ yearToSend, setYearToSend ] = useState(year)
  const [ mealsByDay, setMealsByDay ] = useState<MealsByDay[]>([])

  useEffect(() => {
    api.get('/department').then(({ data }) => {
      setDepartments(data)
    })
  }, [])

  const print = () => {
    if (mealsByDay.length === 0) {
      alert('Não existe refeições para imprimir da tela')
      return
    }
    window.print()
  }

  const submit = async () => {
    try {
      setLoad(true)
      const {data} = await api.get('/report/meals/day', {
        params: {
          month: monthToSend,
          year: yearToSend
        }
      })
      setMealsByDay(data.mealsByDay)
      setLoad(false)
    } catch (error) {
      setLoad(false)
      console.log(error)
      setMealsByDay([])

      if (error instanceof AxiosError) {
        if(error.response?.data.message === 'Meals Not Found.') alert('Sem refeições no período selecionado!')
      }
    }
  }

  const valueTotalMeals = mealsByDay.reduce((previousValue, currentValue) => previousValue + currentValue.valueTotal, 0)

  return (
    <div className='containerPages reportMealsByDay'>
      <div className='headerPrint headerFilterMealsByDay'>
        <Select
          value={monthToSend}
          onChange={e => setMonthToSend(Number(e.target.value))}
        >
          {months.map((month, i) => (
            <option value={i+1} key={i}>{month}</option>
          ))}
        </Select>
        <Select
          value={yearToSend}
          onChange={e => setYearToSend(Number(e.target.value))}
        >
          {years.map((year, i) => (
            <option value={i+1} key={i}>{year}</option>
          ))}
        </Select>
        <button onClick={submit}>Carregar</button>

        <button onClick={print}>Imprimir</button>
      </div>
      <h2>Refeições Por Dia</h2>

      <h3>{`${months[monthToSend-1]} de ${yearToSend}`}</h3>

      <table>
        <thead>
          <tr>
            <th>DATA</th>
            <th>DIA</th>
            {
              departments.map(department => (
                <th key={department.id}>{department.name}</th>
              ))
            }
            <th>TOTAL</th>
            <th>VL UNI R$</th>
            <th>VL TOT R$</th>
          </tr>
        </thead>
        <tbody>
          {
            mealsByDay.map(day => (
              <tr key={day.day}>
                <td>{day.date}</td>
                <td>{day.day}</td>
                {
                  day.quantityByDepartment.map((department, index) => (
                    <td key={index}>{department.quantity}</td>
                  ))
                }
                <td>{day.quantityTotal}</td>
                <td>{day.valueUnit}</td>
                <td>{day.valueTotal}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <div className="totMonthMealsDay">
        Total do mês: R$ {valueTotalMeals.toLocaleString('pt-br', {minimumFractionDigits: 2})}
      </div>

      <Backdrop open={load}/>
    </div>
  )
}