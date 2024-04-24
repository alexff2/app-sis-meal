import { AiOutlineClose } from 'react-icons/ai'

type HeaderProps = {
  title: string
  id: string
}

export function Header({ title, id }: HeaderProps){
  const handleCloseModalRegisterEmployee = () => {
    const modalElement = document.getElementById(id)

    modalElement?.classList.remove('open')
  }

  return(
    <>
      <header>
        <h2>{title}</h2>
        <AiOutlineClose onClick={handleCloseModalRegisterEmployee} />
      </header>
    </>
  )
}