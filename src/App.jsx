import './App.css'

// 2. Reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

// 4. Navegando entre páginas

function App() {

  return (
    <div className='app'>
      <Navbar />
      <h1>React Router</h1>
      {/* Só muda o que está em outlet a partir da children */}
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}

export default App
