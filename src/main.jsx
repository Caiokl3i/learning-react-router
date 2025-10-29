import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1. Configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import ContactDetails from './routes/ContactDetails.jsx'


/* Estrutura de objetos do router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'contact',
    element: <Contact />
  }
]) */

// 2. Reaproveitamento de estruturas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // 3. Iserindo página de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      // 5. Nested routes (carregar paginas que são carregadas do banco)
      {
        path: '/contact/:id',
        element: <ContactDetails />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Router como props do RouterProvider */}
    <RouterProvider router={router} />
  </StrictMode>,
)
