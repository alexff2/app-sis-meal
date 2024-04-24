import { Select, ModalRegister } from '../../../components'

export function ModalRegisterEmployee(){
  const handleSubmit = () => {
    
  }

  return(
    <ModalRegister.Root id='modalRegisterEmployeeId'>
      <ModalRegister.Header
        title='Cadastro de funcionários'
        id='modalRegisterEmployeeId'
      />

      <ModalRegister.Form onSubmit={handleSubmit} id='modalRegisterEmployeeId'>
        <input type='text' placeholder='Nome do funcionário' />

        <Select>
          <option>Departamento 0</option>
          <option>Departamento 2</option>
        </Select>

        <button type='submit'>Salvar</button>
      </ModalRegister.Form>
    </ModalRegister.Root>
  )
}
