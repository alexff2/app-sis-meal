import { ModalRegister } from '../../../components'

export function ModalRegisterUser() {
  const handleSubmit = () => {
    
  }

  return(
    <ModalRegister.Root id='modalRegisterUserId'>
      <ModalRegister.Header
        title='Cadastro de Usuários'
        id='modalRegisterUserId'
      />

      <ModalRegister.Form onSubmit={handleSubmit} id='modalRegisterUserId'>
        <input type='text' placeholder='Nome' required/>
        <input type='email' placeholder='Email' required/>
        <input type='password' placeholder='Senha' required/>
        <input type='password' placeholder='Repita a senha' required/>

        <button type='submit'>Salvar</button>
      </ModalRegister.Form>
    </ModalRegister.Root>
  )
}