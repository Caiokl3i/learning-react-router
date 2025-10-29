import './App.css'

// 2. Reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='app'>
      <nav>Navbar</nav>
      <h1>React Router</h1>
      {/* Só muda o que está em outlet a partir da children */}
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}

export default App
