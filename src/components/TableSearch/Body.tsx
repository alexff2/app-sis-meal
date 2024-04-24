type BodyProps = {
  children: React.ReactNode
}

export function Body({ children }: BodyProps){
  return (
    <section>{ children }</section>
  )
}
