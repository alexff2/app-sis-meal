import { useState } from 'react'
import { ModalRegister } from '../../../components'
import { api } from '../../../services'
import { UserPropsSate } from '..'

interface Props {
  setUsers: React.Dispatch<React.SetStateAction<UserPropsSate[]>>
}

export function ModalRegisterUser({ setUsers }: Props) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordRe: ''
  })

  const handleSubmit = async () => {
    if (user.email === '' &&
        user.email === '' &&
        user.email === '' &&
        user.email === ''
    ){
      console.log(user)
      alert('Preencha todos os dados!')
      throw new Error('Preencha todos os dados!')
    }

    if (user.password !== user.passwordRe) {
      alert('As senhas estão diferentes!')
      throw new Error('As senhas estão diferentes!')
    }

    const { data } = await api.post('user', user)

    setUsers( prev => ([
      ...prev,
      data
    ]))

    alert('Usuário criado com sucesso!')
  }

  return(
    <ModalRegister.Root id='modalRegisterUserId'>
      <ModalRegister.Header
        title='Cadastro de Usuários'
        id='modalRegisterUserId'
      />

      <ModalRegister.Form onSubmit={handleSubmit} id='modalRegisterUserId'>
        <input
          type='text'
          placeholder='Nome'
          required
          onChange={e => setUser(prev => ({...prev, name: e.target.value}))}
        />
        <input
          type='email'
          placeholder='Email'
          required
          onChange={e => setUser(prev => ({...prev, email: e.target.value}))}
        />
        <input
          type='password'
          placeholder='Senha'
          required
          onChange={e => setUser(prev => ({...prev, password: e.target.value}))}
        />
        <input
          type='password'
          placeholder='Repita a senha'
          required
          onChange={e => setUser(prev => ({...prev, passwordRe: e.target.value}))}
        />

        <button type='submit'>Salvar</button>
      </ModalRegister.Form>
    </ModalRegister.Root>
  )
}