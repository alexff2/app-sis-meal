type TableProps = {
  headers: string[]
  children: React.ReactNode
}

export function Table({ headers, children }: TableProps){
  return (
    <table>
      <thead>
        <tr>
          {
            headers.map( value => (
              <th key={value}>{value}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        { children }
      </tbody>
    </table>
  )
}