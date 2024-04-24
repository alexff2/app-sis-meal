type FormProps = {
  children: React.ReactNode
  onSubmit: () => void
  id: string
}

export function Form({ children, onSubmit, id }: FormProps){
  const handleCloseModalRegisterEmployee = () => {
    const modalElement = document.getElementById(id)

    modalElement?.classList.remove('open')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit()
    handleCloseModalRegisterEmployee()
  }

  return (
    <form onSubmit={handleSubmit}>{ children }</form>
  )
}
