import { ModalRegister } from '../../../components'

export function ModalRegisterDepartment() {
  const handleSubmit = () => {
    
  }

  return(
    <ModalRegister.Root id='modalRegisterDepartmentId'>
      <ModalRegister.Header
        title='Cadastro de Departamentos'
        id='modalRegisterDepartmentId'
      />

      <ModalRegister.Form onSubmit={handleSubmit} id='modalRegisterDepartmentId'>
        <input type='text' placeholder='Nome do departamento' />

        <button type='submit'>Salvar</button>
      </ModalRegister.Form>
    </ModalRegister.Root>
  )
}