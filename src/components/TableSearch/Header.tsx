type HeaderProps = {
  children: React.ReactNode
  title: string
}

export function Header({ children, title }: HeaderProps){
  return(
    <>
      <h2>{title}</h2>
      <header>
        {children}
      </header>
    </>
  )
}