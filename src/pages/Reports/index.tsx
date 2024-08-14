import { Link } from 'react-router-dom'
import './style.css'

export function Reports() {
  return (
    <div className='containerPages reportContainer'>
      <h2>Relatórios</h2>

      <div className='linkReports'>
        <Link to='/reports/meals/days'>Refeições por dia</Link>
        <Link to='/reports/barcode'>Código de barras</Link>
      </div>
    </div>
  )
}
