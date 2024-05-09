type FormProps = {
  children: React.ReactNode
  onSubmit: () => Promise<void>
  id: string
}

export function Form({ children, onSubmit, id }: FormProps){
  const handleCloseModalRegisterEmployee = () => {
    const modalElement = document.getElementById(id)

    modalElement?.classList.remove('open')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      await onSubmit()
      handleCloseModalRegisterEmployee()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>{ children }</form>
  )
}
