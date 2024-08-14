import { OverLow } from '../OverLow'
import './style.css'

export function Backdrop({ open = true }) {
  return (
    <OverLow className={open ? 'over-low open' : 'over-low'}>
      <div className='backdrop'>
        <div className='loader'></div>
      </div>
    </OverLow>
  )
}