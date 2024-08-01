import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Perfil from './components/Perfil/Perfil.jsx'
import Usuarios from './components/Usuarios.jsx'


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/perfil",
      element: <Perfil/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
