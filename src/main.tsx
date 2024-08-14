import ReactDOM from 'react-dom/client'
import Routes from './Routes/index.tsx'

import './style/global.css'
import Context from './contexts/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context>
    <Routes />
  </Context>,
)
