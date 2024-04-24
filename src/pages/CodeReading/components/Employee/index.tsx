import './style.css'

export function Employee(){
  return(
    <div className="cardEmployee">
      <div className="cardImg"></div>
      <div className="employeeImg">
        <div className="img"></div>
      </div>
      <div className="descriptions">
        <p><strong>Código: </strong> 10001</p>
        <p><strong>Nome: </strong> Funcionário 1</p>
        <p><strong>Departamento: </strong> Departamento 1</p>
      </div>
    </div>
  )
}