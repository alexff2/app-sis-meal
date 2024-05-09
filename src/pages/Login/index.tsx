import { useEffect, useState } from 'react'

import { Select } from '../../components'
import { useAuthenticate, useWindowSize } from '../../hooks'
import './style.css'

export function Login(){
  const{ widthWindow } = useWindowSize()
  const { login } = useAuthenticate()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ app, setApp ] = useState<'register'|'codeReading'>('register')

  useEffect(()=> setApp(widthWindow >= 900 ? 'register' : 'codeReading'), [widthWindow])

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()

      login({email, password, app})

    } catch (error) {
      console.log(error)
      
      alert('Erro ao logar, entre em contato com administrador.')
    }
  }

  return(
    <div className="container alignCenter">
      <form className="form-login" onSubmit={handleLogin}>
        <fieldset>
          <legend>LOGIN</legend>

          <Select
            onChange={e => setApp(e.target.value === 'register' ? 'register' : 'codeReading')}
          >
            {
              widthWindow >= 900 &&
              <>
                <option value='register'>Cadastros</option>
                <option value='codeLoading'>Leitura</option>
              </>
            }
            {
              widthWindow < 900 &&
              <>
                <option value='codeLoading'>Leitura</option>
                <option value='register'>Cadastros</option>
              </>
            }
          </Select>
          <input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
          <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
        </fieldset>
        <button type="submit">Entrar</button>
      </form>
      <div>
      </div>
    </div>
  )
}
