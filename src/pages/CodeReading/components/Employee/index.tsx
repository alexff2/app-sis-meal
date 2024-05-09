import { EmployeeProps } from '../..'
import './style.css'

type Props = {
  employee: EmployeeProps | null
}

export function Employee({ employee }: Props){
  return(
    <div className="cardEmployee">
      <div className="cardImg"></div>
      <div className="employeeImg">
        <div className="img"></div>
      </div>
      <div className="descriptions">
        <p><strong>Código: </strong>{employee?.id}</p>
        <p><strong>Nome: </strong>{employee?.name}</p>
        <p><strong>Departamento: </strong>{employee?.department}</p>
      </div>
    </div>
  )
}