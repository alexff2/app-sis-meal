import './style.css'

export function Filters(){
  return(
    <div className="alignCenter filterContainer">
      <form>
          <input type="text" placeholder="Código" />
          <button type="submit">Ler</button>
      </form>
    </div>
  )
}